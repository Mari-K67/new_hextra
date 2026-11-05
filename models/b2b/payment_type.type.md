The payment type.

{{< callout type="info" >}}
* The possible values:
  * `now`. Use it to allow the user to pay for the booking via the ETG payment system:
    1. Request the Create booking process call and get the card details.
    1. Request the Create credit card token call with the card details.
  * `hotel`. Use it to allow the user to pay for the booking upon check-in at the hotel. The user won’t be charged now.
  * `deposit`. Use it to allow you to charge the user bank card for the booking by yourself:
    1. You need to keep your ETG deposit sufficient. To increase funds, contact your account manager.
    1. The user makes a booking.
    1. You charge the user bank card.
    1. The ETG writes funds from your deposit by themselves during the reporting period.

    Every payment goes under a credit limit for the deposit.
{{< /callout >}}