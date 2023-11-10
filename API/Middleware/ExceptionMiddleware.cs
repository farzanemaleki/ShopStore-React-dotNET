using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace API.Middleware;

public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionMiddleware> _logger;
    private readonly IHostEnvironment _env;

    public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env)
    {
        _next = next;
        _logger = logger;
        _env = env;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            // Call the next middleware in the pipeline
            await _next(context);
        }
        catch (Exception ex)
        {
            // Log the exception
            _logger.LogError(ex, ex.Message);

            // Set the response content type and status code
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = 500;

            // Create a ProblemDetails object to represent the error response
            var response = new ProblemDetails
            {
                Status = 500,
                Detail = _env.IsDevelopment() ? ex.StackTrace?.ToString() : null,
                Title = ex.Message,
            };

            // Configure JSON serialization options
            var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

            // Serialize the ProblemDetails object to JSON
            var json = JsonSerializer.Serialize(response, options);

            // Write the JSON response to the client
            await context.Response.WriteAsync(json);
        }
    }

}
