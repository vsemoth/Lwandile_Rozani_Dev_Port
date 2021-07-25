import Head from "next/head";
import React from "react";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";

const Contact = () => {
    return (
        <Layout>
            <Head>
                <title>Contact Me</title>
            </Head>
            <ContactForm />
        </Layout>
    );
}
 
export default Contact;