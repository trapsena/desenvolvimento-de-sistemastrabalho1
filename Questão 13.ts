interface Notificacao {
    enviar(destinatario: string, mensagem: string): void;
}

class Email implements Notificacao {
    //se o dest tem @ ele vai mandar a mensagem
    enviar(destinatario: string, mensagem: string): void {
        console.log(
            destinatario.includes("@") && destinatario.includes(".")
                ? `Enviando email para ${destinatario}: ${mensagem}`
                : "E-mail inválido."
        );
    }
}

class Sms implements Notificacao {
    //se o numero tem mais e  tem no maximo 6 numeros ele envia a mensagem por sms
    enviar(destinatario: string, mensagem: string): void {
        console.log(
            destinatario.startsWith("+") && destinatario.length > 7
                ? `Enviando SMS para ${destinatario}: ${mensagem}`
                : "Número de telefone inválido."
        );
    }
}

const email = new Email();
email.enviar("teste@example.com", "Olá, este é um e-mail de teste!");

const sms = new Sms();
sms.enviar("+5511999999999", "Olá, esta é uma mensagem de SMS!");

