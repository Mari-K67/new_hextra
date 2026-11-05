The external booking ID.

{{< callout type="info" >}}
* The length is `36` characters.
* Must be unique for every payment. Otherwise, the ETG will return an error.
* The value matches the pattern: `^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$`.
* Is required for bookings where the `is_need_credit_card_data` field was passed with the `true` value.
* Should be the same with the `init_uuid` field value from the Create credit card token call.
{{< /callout >}}