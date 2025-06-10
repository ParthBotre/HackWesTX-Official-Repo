import Head from 'next/head';

const ApplyPage = () => {
  return (
    <>
      <Head>
        <title>HackWesTX VI - Apply</title>
        <meta name="description" content="Apply for HackWesTX VI 2025" />
        <link rel="stylesheet" href="https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css" />
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 200px)', backgroundColor: '#020116', padding: '20px' }}>
        <iframe
          id="ts-iframe"
          src="https://www.townscript.com/v2/widget/hackwestx-vi-2025-113224/booking"
          frameBorder="0"
          height="600"
          width="80%"
          style={{ maxWidth: '1000px', minWidth: '300px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' }}
        ></iframe>
      </div>
    </>
  );
};

export default ApplyPage;
