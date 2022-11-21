// dependencies
import React, { createRef, useState } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
// components
import Head from 'next/head';
import Image from 'next/legacy/image';
import {
  PageContainer,
  MainContent,
  LeftSide as Left,
  FormError,
  RightSide as Right,
} from '../../styles/pages/containers';
import { MailImg } from '../../styles/pages/media';
import { FormSubmitBtn } from '../../styles/pages/buttons';
import { Result, LoadingSpinner, PublicLayout } from '../../components';
import {
  PageTitle,
  ContactForm,
  ContactInput,
  ContactLabel,
  ContactText,
  ContactTextArea,
  ReCAPTCHALink,
  ReCAPTCHAText,
} from '../../styles/pages/typography';
// assets
import MailBoxes from '../../../public/images/po-boxes.jpeg';
// services
import sendEmail from '../../services/emailService';
// css
import { breakpoints, breakpointValues } from '../../styles/breakpoints';

const { tabletLg, desktopSm, desktopLg } = breakpointValues;

const ContactContainer = styled(PageContainer)`
  background-color: var(--color-bg-secondary);

  ${breakpoints('align-items', '', [{ [desktopLg]: 'center' }])};
`;

const LeftSide = styled(Left)`
  width: 90%;
  max-width: 785px;

  ${breakpoints('width', '', [{ [tabletLg]: '60%' }])};
`;

const RightSide = styled(Right)`
  display: none;
  width: 40%;
  margin-left: 4rem;
  max-width: 525px;

  ${breakpoints('display', '', [{ [tabletLg]: 'initial' }])};
  ${breakpoints('margin-left', 'rem', [{ [desktopSm]: 8 }])};
`;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [emailSent, setEmailSent] = useState(false);
  const [approval, setApproval] = useState(false);
  const [error, setError] = useState(false);

  let content;
  const recaptchaRef = createRef();
  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const onSubmit = async (formData) => {
    try {
      setData(formData);
      setLoading(true);
      recaptchaRef.current.execute();
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const recaptchaChange = async () => {
    if (!emailSent) {
      if (
        // eslint-disable-next-line
        process.env.NODE_ENV === 'production' ||
        process.env.NODE_ENV === 'staging'
      ) {
        await sendEmail(data);
      } else {
        // eslint-disable-next-line
        console.log('Sending email here...', data);
      }

      setEmailSent(true);
      setApproval(true);
      setLoading(false);
    }
  };

  if (loading) {
    content = (
      <>
        <PageTitle>contact()</PageTitle>
        <MainContent className="center">
          <LoadingSpinner />
        </MainContent>
      </>
    );
  } else if (approval) {
    content = (
      <>
        <PageTitle>contact()</PageTitle>
        <Result approval className="slide-in-left" />
      </>
    );
  } else if (error) {
    content = (
      <>
        <PageTitle>contact()</PageTitle>
        <Result className="slide-in-left" />
      </>
    );
  } else {
    content = (
      <>
        <PageTitle>contact()</PageTitle>
        <MainContent className="slide-in-left">
          <LeftSide>
            <ContactText>
              Have a question, thoughts, or want to work together?
            </ContactText>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
              <ContactLabel htmlFor="name">Name:</ContactLabel>
              <ContactInput
                type="text"
                placeholder="Namey McNameson"
                id="name"
                // eslint-disable-next-line
                {...register('name', { required: 'Name is required.' })}
              />
              {errors.name && <FormError>{errors.name.message}</FormError>}
              <ContactLabel htmlFor="email">Email:</ContactLabel>
              <ContactInput
                type="text"
                placeholder="example@email.com"
                id="email"
                // eslint-disable-next-line
                {...register('email', { required: 'Email is required.' })}
              />
              {errors.email && <FormError>{errors.email.message}</FormError>}
              <ContactLabel htmlFor="name">Message:</ContactLabel>
              <ContactTextArea
                placeholder="I had an idea for you..."
                id="message"
                maxLength="200"
                rows="4"
                // eslint-disable-next-line
                {...register('message', {
                  required: 'Message is required.',
                  maxLength: {
                    value: 200,
                    message: 'Maximum message length 200 characters.',
                  },
                })}
              />
              {errors.message && (
                <FormError>{errors.message.message}</FormError>
              )}
              <ReCAPTCHAText>
                This site is protected by reCAPTCHA and the Google&nbsp;
                <ReCAPTCHALink href="https://policies.google.com/privacy">
                  Privacy Policy
                </ReCAPTCHALink>
                &nbsp;and&nbsp;
                <ReCAPTCHALink href="https://policies.google.com/terms">
                  Terms of Service
                </ReCAPTCHALink>
                &nbsp;apply.
              </ReCAPTCHAText>
              <FormSubmitBtn type="submit">Submit</FormSubmitBtn>
            </ContactForm>
          </LeftSide>
          <RightSide>
            <MailImg>
              <Image
                src={MailBoxes}
                alt="Wall of blue P.O. Boxes."
                layout="responsive"
                priority
              />
            </MailImg>
          </RightSide>
        </MainContent>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Jacob Andes via this form." />
        <meta name="robots" content="index, follow" />
      </Head>
      <PublicLayout>
        <ContactContainer>
          {content}
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={sitekey}
            onChange={recaptchaChange}
            onError={() => {
              setError(true);
              setLoading(false);
            }}
          />
        </ContactContainer>
      </PublicLayout>
    </>
  );
};

export default Contact;
