# PanYart API

## It's pourpose:

This API was developed to manage buyings of products using a specific digital coin named **Pan Coins**, which can be earned by commissioning <a href="panyart.studio" target="_blank">PanYart, a digital furry artist</a>.

Everytime you buy an art of him, you receive not only the artwork but also a card (also generated by this system) containing a code that can be redeemed to earn specific ammounts of Pan Coins.

With these coins, you can buy other art products from the artist, listed on a digital menu, where it's items are dynamic allocated with limited product stock.

**It serves as a loyalty card dynamic system, where you can choose your bonus products.**

---

## 🛠️ User Features:

- User can register;
- User can login;
- User can logout;
- User can update his personal informations;
- User can reset his password after logged on;
- User can reset his password if it has been forgotten;
- User receives confirmation emails;
- Staff can generate coins cards;
- User can redeem coins cards;

---

## ⚙️ System Features:

- Server runs using `express`;
- JWT Authentication using `cookie-cutter` and `jsonwebtoken`;
- TOTP authentication using `otplib`;
- Password Encryption using `bcryptjs`;
- Request validations using `express-validator`;
- Database ORM `prisma`;
- `express` router middlewares to control *permissions*;
- Environment variables management with `dotenv`.

--- 
