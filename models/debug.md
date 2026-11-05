Additional information about the response.  
This field is intended for development and debugging, as well as for diagnostics and troubleshooting.  
May be null if the request completed without warnings and errors.

{{< callout type="info" >}}
The debug field is not intended for production monitoring. Its structure may change without notice.
{{< /callout >}}

{{< details title="api_endpoint" type="Object" >}}
{{% desc "models/debug.api_endpoint.md" %}}
{{< /details >}}

{{< details title="request" type="[Object]" >}}
The full structure of the partner's request as received.
{{< /details >}}

{{< details title="method" type="String" >}}
HTTP request method (e.g. POST, GET).
{{< /details >}}

{{< details title="real_ip" type="String" >}}
The detected client IP.
{{< /details >}}

{{< details title="request_id" type="String" >}}
Unique internal request ID.
{{< /details >}}

{{< details title="key_id" type="Int" >}}
Identifiers of your API key.
{{< /details >}}

{{< details title="api_key_id" type="Int" >}}
Identifiers of your API key.
{{< /details >}}

{{< details title="utcnow" type="String" >}}
UTC timestamp of request handling start.
{{< /details >}}

{{< details title="validation_error" type="String" >}}
Error description (present only for requests with invalid parameters).
{{< /details >}}