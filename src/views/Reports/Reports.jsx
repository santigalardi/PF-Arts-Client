import { useState } from 'react';
import { FaCalendar, FaShare, FaFileExport } from 'react-icons/fa';
import { VictoryPie, VictoryLabel, VictoryBar, VictoryChart } from 'victory';
import { PDFViewer } from '@react-pdf/renderer';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import jsPDF from 'jspdf';
import DocPDF from './DocPDF';
import styles from './Reports.module.css';

const Reports = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Reports',
          text: 'Check out these amazing Reports!',
          url: window.location.href,
        })
        .then(() => {
          console.log('Reports shared successfully');
        })
        .catch((error) => {
          console.error('Error sharing Orders:', error);
        });
    } else {
      console.log('Web Share API not supported in this browser');
    }
  };

  const handleExport = () => {
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  const handleDownloadPDF = () => {
    alert('PDF generated successfully');
    // Crear una instancia de jspdf
    const doc = new jsPDF(DocPDF);
  
    // Agregar contenido al PDF
    doc.text('Customers', 10, 10);
    doc.autoTable({ html: '#usersTable' });
  
    // Descargar el PDF
    doc.save('customers.pdf')
  };

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
            <div className='sidebar-sticky'>
              <DashboardMenu />
            </div>
          </nav>

          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
            <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
              <h1 className='h2'>Reports</h1>
              <div className='btn-toolbar mb-2 mb-md-0'>
                <div className='btn-group mr-2'>
                  <button className='btn btn-sm btn-outline-secondary' onClick={handleShare}>
                    <FaShare /> Share
                  </button>
                  {showPreview ? (
                    <button className='btn btn-sm btn-outline-secondary' onClick={handleClosePreview}>
                      Close Preview
                    </button>
                  ) : (
                    <button className='btn btn-sm btn-outline-secondary' onClick={handleExport}>
                      <FaFileExport /> Export
                    </button>
                  )}
                </div>
                <button className='btn btn-sm btn-outline-secondary dropdown-toggle'>
                  <span className='feather' data-feather='calendar'></span>
                  <FaCalendar /> This week
                </button>
              </div>
            </div>

            <div className={styles['ContainerGraf']}>
              <VictoryPie
              //  grafico pastel
                colorScale={['#e74c3c', '#2ecc', '#eeeb22cc']}
                data={[
                  { x: 'Users', y: 35 },
                  { x: 'Sales', y: 40 },
                  { x: 'artworks', y: 55 },
                ]}
                animate={[2000]}
                labelComponent={<VictoryLabel domainPadding={-10} style={{ fill: 'red' }} />}
              />
              <VictoryChart domainPadding={{ x: 20 }}>
                <VictoryBar
                //grafico de barras
                  style={{
                    data: {
                      fill: ({ datum }) => datum.fill,
                    },
                    labels: { fill: 'black' },
                  }}
                  alignment='start'
                  data={[
                    { x: 'Users', y: 35, fill: 'red' },
                    { x: 'Sales', y: 40, fill: 'orange' },
                    { x: 'artworks', y: 55, fill: 'blue' },
                  ]}
                  labels={({ datum }) => datum.y}
                  labelComponent={<VictoryLabel dy={0} dx={15} />}
                />
              </VictoryChart>
            </div>
            {showPreview ? (
              <div className={styles.PDFPreview} >
                <PDFViewer style={{ width: '100%', height: '90vh' }}>
                  <DocPDF />
                </PDFViewer>
              </div>
            ) : (
              <div className={styles.DownloadButton}>
                <button className='btn btn-sm btn-outline-secondary' onClick={handleDownloadPDF}>
                  <FaFileExport /> Dowload PDF
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Reports;
