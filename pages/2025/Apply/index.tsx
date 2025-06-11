import { Divider } from '@mantine/core';
import { Grid } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const ApplyPage = () => {
  return (
    <>
      <Head>
        <title>HackWesTX VI - Apply</title>
        <meta name="description" content="Apply for HackWesTX VI 2025" />
        <link
          rel="stylesheet"
          href="https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css"
        />
      </Head>

      <Grid container>
        <div className="flex flex-col justify-center w-full h-full gap-y-5 bg-[#020116] text-white">
          <div className="my-4 flex flex-col justify-center text-center font-light text-4xl w-3/4 gap-6 mx-auto">
            <div className="text-6xl">
              Apply for HackWes
              <div className="inline text-purple-700">TX</div> VI
            </div>
            <Divider size="sm" className="mb-8" />
            <div className="text-3xl">
              Click here to go{' '}
              <Link href="/2025" className="inline text-purple-700">
                back.
              </Link>
            </div>
            <div>
              Applications are reviewed on a rolling basis. Completing the
              application does not guarantee admission.
            </div>
          </div>

          <div className="flex justify-center my-8">
            <iframe
              id="ts-iframe"
              src="https://www.townscript.com/v2/widget/hackwestx-vi-2025-113224/booking"
              height="600"
              width="80%"
              title="Townscript Booking"
              className="max-w-[1000px] min-w-[300px] rounded-lg shadow-lg"
            ></iframe>
          </div>

          <div className="flex flex-col mx-auto w-4/5 my-8">
            <div className="text-center font-light text-3xl w-3/4 gap-6 mx-auto my-8">
              For any additional questions,{' '}
              <Link
                className="text-purple-700 m-0 p-0"
                href="mailto:contact@hackwestx.tech"
              >
                contact us.
              </Link>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

ApplyPage.getLayout = (page: React.ReactElement) => page;

export default ApplyPage;
