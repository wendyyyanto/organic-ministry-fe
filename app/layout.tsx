import type { Metadata } from "next";
import localFont from "next/font/local";
import NavbarLayout from "./components/NavbarLayout";
import "./globals.css";

export const metadata: Metadata = {
	title: "Organic Ministry",
	description: "We're not exist for God but because of God"
};

const meloFont = localFont({
	src: "../public/font/Melodrama-Variable.ttf",
	variable: "--font-melodrama"
});

const clashFont = localFont({
	src: "../public/font/ClashDisplay-Variable.ttf",
	variable: "--font-clash"
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${meloFont.variable} ${clashFont.variable}`}
		>
			<body>
				<NavbarLayout>{children}</NavbarLayout>
			</body>
		</html>
	);
}
