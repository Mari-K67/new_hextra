Info about rate limits and endpoint activity.

{{< details title="endpoint" type="String" >}}
API endpoint.
{{< /details >}}

[//]: # (is_active)
{{< details title="is_active" type="Boolean" >}}
{{% desc "models/is_active.md" %}}
{{< /details >}}

[//]: # (is_limited)
{{< details title="is_limited" type="Boolean" >}}
{{% desc "models/is_limited.md" %}}
{{< /details >}}

{{< details title="remaining" type="Int" >}}
Number of requests remaining before the rate limit is reached in the current period.
{{< /details >}}

[//]: # (requests_number)
{{< details title="requests_number" type="Int" >}}
{{% desc "models/requests_number.md" %}}
{{< /details >}}

{{< details title="reset" type="String" >}}
The time and date when the rate limit will be reset and remaining requests will be restored to its maximum (requests_number).
{{< /details >}}

[//]: # (seconds_number)
{{< details title="seconds_number" type="Int" >}}
{{% desc "models/seconds_number.md" %}}
{{< /details >}}