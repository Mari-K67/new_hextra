The external booking ID in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.

The ID remains the same if you cancel a booking that:
* Is successful.
* Is failed.
* Has the fail status response from the Check booking process call.

Use this field for the rest of the booking calls.

{{< callout type="info" >}}
* The value should be unique for the order within the same contact.
* The minimum length is `3` character.
* The maximum length is `256` characters.
{{< /callout >}}