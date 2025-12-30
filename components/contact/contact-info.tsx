"use client";

import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-heading mb-6">Contact Information</h3>
                <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">Email</p>
                            <a
                                href={`mailto:${siteConfig.links.email}`}
                                className="text-foreground hover:text-primary transition-colors"
                            >
                                {siteConfig.links.email}
                            </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">Phone</p>
                            <a
                                href="tel:+94704916740"
                                className="text-foreground hover:text-primary transition-colors"
                            >
                                +94 70 491 6740
                            </a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">Location</p>
                            <p className="text-foreground">Colombo, Sri Lanka</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Connect With Me */}
            <div>
                <h4 className="text-lg font-heading mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                    <Link
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-md bg-background border border-input hover:bg-accent hover:text-accent-foreground h-11 w-11 transition-colors"
                        aria-label="LinkedIn Profile"
                    >
                        <Icons.linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-md bg-background border border-input hover:bg-accent hover:text-accent-foreground h-11 w-11 transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <Icons.gitHub className="w-5 h-5" />
                    </Link>
                    <Link
                        href={`mailto:${siteConfig.links.email}`}
                        className="inline-flex items-center justify-center rounded-md bg-background border border-input hover:bg-accent hover:text-accent-foreground h-11 w-11 transition-colors"
                        aria-label="Email"
                    >
                        <Icons.gmail className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
