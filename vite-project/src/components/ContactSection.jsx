import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";

export const ContactSection = () => {
    // Estados para controlar o envio do formulário
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

    // Função que processa o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Cria FormData a partir dos campos do formulário
        const formData = new FormData(e.target);
        
        try {
            // Envia dados para o Formspree (serviço de formulários)
            const response = await fetch('https://formspree.io/f/mwpqrnjq', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            // Verifica se o envio foi bem-sucedido
            if (response.ok) {
                setSubmitStatus('success');
                e.target.reset(); // Limpa o formulário
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error sending form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative border-t-2 border-border">
            <div className="container mx-auto max-w-5xl">
                {/* Título da seção */}
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
                    Contact <span className="text-main">Me</span>
                </h2>

                {/* Descrição da seção */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Let's work together! Feel free to reach out for collaborations or just to say hello.
                </p>

                {/* Layout em grid: informações de contato + formulário */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Coluna esquerda: Informações de contato */}
                    <div className="space-y-8">
                        {/* Texto introdutório */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
                            <p className="text-muted-foreground mb-8">
                                I'm always interested in new opportunities and exciting projects.
                                If you have a question, send a message!
                            </p>
                        </div>

                        {/* Lista de informações de contato */}
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-none border-2 border-border bg-secondary-background">
                                    <Mail className="h-6 w-6 text-foreground" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Email</h4>
                                    <p className="text-muted-foreground">gt.rosati@gmail.com</p>
                                </div>
                            </div>

                            {/* Telefone */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-none border-2 border-border bg-secondary-background">
                                    <Phone className="h-6 w-6 text-foreground" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Phone</h4>
                                    <p className="text-muted-foreground">+55 (19) 98383-7659</p>
                                </div>
                            </div>

                            {/* Localização */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-none border-2 border-border bg-secondary-background">
                                    <MapPin className="h-6 w-6 text-foreground" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Location</h4>
                                    <p className="text-muted-foreground">São Paulo, Brazil</p>
                                </div>
                            </div>
                        </div>

                        {/* Redes sociais */}
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">
                                Follow
                                <span className="text-main"> Me</span>
                            </h4>
                            <div className="flex space-x-4">
                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/gabriel-tb-rosati/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-none border-2 border-border bg-secondary-background hover:bg-chart-1 transition-colors duration-150 group"
                                >
                                    <Linkedin className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform duration-150" />
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/MuketaUeda"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-none border-2 border-border bg-secondary-background hover:bg-chart-1 transition-colors duration-150 group"
                                >
                                    <Github className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform duration-150" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Coluna direita: Formulário de contato */}
                    <Card className="p-8 gap-0">

                        {/* Mensagens de status do formulário */}
                        {submitStatus === 'success' && (
                            <Alert variant="success" className="mb-6">
                                <CheckCircle className="h-5 w-5" />
                                <AlertDescription>Message sent successfully! I'll get back to you soon.</AlertDescription>
                            </Alert>
                        )}

                        {submitStatus === 'error' && (
                            <Alert variant="error" className="mb-6">
                                <AlertCircle className="h-5 w-5" />
                                <AlertDescription>Failed to send message. Please try again or contact me directly via email.</AlertDescription>
                            </Alert>
                        )}

                        {/* Formulário de contato */}
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Campo Nome */}
                            <div>
                                <Label htmlFor="name" className="block mb-2">
                                    Name
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    disabled={isSubmitting}
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Campo Email */}
                            <div>
                                <Label htmlFor="email" className="block mb-2">
                                    Email
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    disabled={isSubmitting}
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Campo Mensagem */}
                            <div>
                                <Label htmlFor="message" className="block mb-2">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    required
                                    disabled={isSubmitting}
                                    rows={5}
                                    className="resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            {/* Botão de envio */}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    // Estado de loading
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-main-foreground"></div>
                                        Sending...
                                    </>
                                ) : (
                                    // Estado normal
                                    <>
                                        Send Message
                                        <Send className="h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};