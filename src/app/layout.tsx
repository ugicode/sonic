import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Afacad } from "next/font/google";
import { supabase } from "@/services/supabase";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Afacad({ subsets: ["latin"] });
const fetchSectionData = async () => {
  try {
    const { data, error } = await supabase
      .from("company-info")
      .select()
      .single();
    return data;
  } catch (error) {
    return [];
  }
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const data = await fetchSectionData();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer data={data} />
            <ScrollToTop />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
