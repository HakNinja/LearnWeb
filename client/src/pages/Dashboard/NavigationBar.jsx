import './NavigationBar.css';

const NavigationBar = () => {
    return (
      <nav>
        <img src="Logo.png" alt="Logo" />
        <ul>
          <li>Instructor Dashboard</li>
          <li>LearnDash LMS</li>
          <li>
            <ul>
              <li>Overview</li>
              <li>Instructor Overview</li>
              <li>Courses</li>
              <li>Groups</li>
              <li>Products</li>
              <li>Profile</li>
              <li>Logout</li>
            </ul>
          </li>
          <li>Earnings</li>
          <li>
            <ul>
              <li>Paid</li>
              <li>Unpaid</li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  };

  export default NavigationBar;
