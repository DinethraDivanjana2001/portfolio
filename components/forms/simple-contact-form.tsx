"use client";

import { useState } from "react";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function SimpleContactForm() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // Your contact details - UPDATE THESE!
    const WHATSAPP_NUMBER = "94771234567"; // Replace with your WhatsApp number (country code + number, no + or spaces)
    const EMAIL = "dinethra.rajapaksha@example.com"; // Replace with your email

    const handleWhatsApp = () => {
        const text = `Hi, I'm ${name || "someone"}!\n\nSubject: ${subject || "No subject"}\n\n${message || "I'd like to get in touch."}`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    const handleEmail = () => {
        const mailtoSubject = subject || "Contact from Portfolio";
        const mailtoBody = `Hi,\n\nMy name is ${name || "[Your Name]"}.\n\n${message || "[Your Message]"}`;
        const url = `mailto:${EMAIL}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
        window.location.href = url;
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-8 bg-card border border-border rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>

            <div className="space-y-4">
                {/* Name Input */}
                <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Your Name (optional)
                    </label>
                    <Input
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-background"
                    />
                </div>

                {/* Subject Input */}
                <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Subject
                    </label>
                    <Input
                        placeholder="What's this about?"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="bg-background"
                    />
                </div>

                {/* Message Textarea */}
                <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Message
                    </label>
                    <Textarea
                        placeholder="Write your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-background min-h-[120px]"
                    />
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                    <Button
                        onClick={handleWhatsApp}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                        size="lg"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        WhatsApp
                    </Button>

                    <Button
                        onClick={handleEmail}
                        variant="outline"
                        className="flex-1"
                        size="lg"
                    >
                        <Icons.mail className="w-5 h-5 mr-2" />
                        Email
                    </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center pt-2">
                    Click WhatsApp or Email to send your message using your preferred app
                </p>
            </div>
        </div>
    );
}
