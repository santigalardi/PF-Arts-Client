import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaClipboardList,
  FaChartBar,
  FaBox,
  FaUsers,
  FaCalendar,
  FaShare,
  FaFileExport,
} from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
            <div className='sidebar-sticky'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    activeClassName='active'
                    to='/dashboard'
                  >
                    <FaHome /> Dashboard{' '}
                    <span className='sr-only'>(current)</span>
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    activeClassName='active'
                    to='/orders'
                  >
                    <FaClipboardList /> Orders
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    activeClassName='active'
                    to='/reports'
                  >
                    <FaChartBar /> Reports
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    activeClassName='active'
                    to='/products'
                  >
                    <FaBox /> Products
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    activeClassName='active'
                    to='/customers'
                  >
                    <FaUsers /> Customers
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
            <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
              <h1 className='h2'>Dashboard</h1>
              <div className='btn-toolbar mb-2 mb-md-0'>
                <div className='btn-group mr-2'>
                  <button className='btn btn-sm btn-outline-secondary'>
                    <FaShare /> Share
                  </button>
                  <button className='btn btn-sm btn-outline-secondary'>
                    <FaFileExport /> Export
                  </button>
                </div>
                <button className='btn btn-sm btn-outline-secondary dropdown-toggle'>
                  <span className='feather' data-feather='calendar'></span>
                  <FaCalendar /> This week
                </button>
              </div>
            </div>

            <div>
              <p> - Acá va gráfico extraído de Paypal. </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
