import * as nodemailer from 'nodemailer';


class Mail {

    constructor(
        public to?: string,
        public subject?: string,
        public message?: string) { }


    sendMail() {

        const mailOptions = {
            from: "stefanyshynyaroslavg@gmailcom",
            to: this.to,
            subject: this.subject,
            html: this.message
        };

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            secure: true,
            auth: {
                user: 'stefanyshynyaroslavg@gmail.com',
                pass: '2921634resp'
            }
        });


        console.log(mailOptions);

        console.log(transporter);
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return error;
            } else {
                return "E-mail enviado com sucesso!";
            }
        });
    }


}

export default new Mail;