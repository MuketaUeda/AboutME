import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github } from "lucide-react";
import { useState } from "react";

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
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                {/* Título da seção */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Contact <span className="text-primary">Me</span>
                </h2>
                
                {/* Descrição da seção */}
                <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
                    Let's work together! Feel free to reach out for collaborations or just to say hello.
                </p>

                {/* Layout em grid: informações de contato + formulário */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Coluna esquerda: Informações de contato */}
                    <div className="space-y-8">
                        {/* Texto introdutório */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in
                                <span className="text-primary"> Touch</span>
                            </h3>
                            <p className="text-foreground/60 mb-8">
                                I'm always interested in new opportunities and exciting projects. 
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        {/* Lista de informações de contato */}
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Email</h4>
                                    <p className="text-foreground/60">gtrosati@gmail.com</p>
                                </div>
                            </div>

                            {/* Telefone */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Phone</h4>
                                    <p className="text-foreground/60">+55 (19) 98383-7659</p>
                                </div>
                            </div>

                            {/* Localização */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Location</h4>
                                    <p className="text-foreground/60">São Paulo, Brazil</p>
                                </div>
                            </div>
                        </div>

                        {/* Redes sociais */}
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">
                                Follow
                                <span className="text-primary"> Me</span>
                            </h4>
                            <div className="flex space-x-4">
                                {/* LinkedIn */}
                                <a 
                                    href="https://www.linkedin.com/in/gabriel-tb-rosati/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 group"
                                >
                                    <Linkedin className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
                                </a>
                                
                                {/* GitHub */}
                                <a 
                                    href="https://github.com/MuketaUeda" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 group"
                                >
                                    <Github className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Coluna direita: Formulário de contato */}
                    <div className="bg-card rounded-lg p-8 shadow-sm">
                        
                        {/* Mensagens de status do formulário */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <p className="text-green-800">Message sent successfully! I'll get back to you soon.</p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                                <AlertCircle className="h-5 w-5 text-red-600" />
                                <p className="text-red-800">Failed to send message. Please try again or contact me directly via email.</p>
                            </div>
                        )}

                        {/* Formulário de contato */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Campo Nome */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground 
                                             focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                                             transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Campo Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground 
                                             focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                                             transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Campo Mensagem */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    disabled={isSubmitting}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground 
                                             focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                                             transition-colors duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Your message..."
                                />
                            </div>

                            {/* Botão de envio */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    // Estado de loading
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        Sending...
                                    </>
                                ) : (
                                    // Estado normal
                                    <>
                                        Send Message
                                        <Send className="h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};