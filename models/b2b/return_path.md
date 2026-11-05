The URL at your side to redirect the user to. It is done by the payment gateway after 3D Secure check. The reason the ETG needs it.

<b>This field is required</b> if the rate you are booking has the `payment_types` field with the `now` value.

The field `data_3ds` of the Check booking process call will have the `null` value if:
* You don’t pass this field.
* The issuing bank requires 3D Secure check.

{{< callout type="info" >}}
* Must have the HTTPS scheme.
* Might have GET parameters.
* The minimum length is `1` character.
* The maximum length is `256` character.
{{< /callout >}}