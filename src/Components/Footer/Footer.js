import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className='footer-list bg-dark'>
        <ul>
          <li>
            <h6>Shop by Category</h6>
          </li>
          <li>Men</li>
          <li>Women</li>
          <li>kids</li>
        </ul>
        <ul>
          <li>
            <h6>Useful Link</h6>
          </li>
          <li>Contact us</li>
          <li>Track Order</li>
          <li>Shipping</li>
        </ul>
        <ul>
          <li>
            <h6>Join us</h6>
          </li>
          <a href='https://github.com/aiman-ansari'>
            <li>
              <i className='fa fa-github text-light'></i>
            </li>
          </a>
          <a href='https://www.linkedin.com/in/aiman-ansari-0054a01a7/'>
            <li>
              <i className='fa fa-linkedin text-light'></i>
            </li>
          </a>
          <a href='https://twitter.com/_aimanansari'>
            <li>
              <i className='fa fa-twitter text-light'></i>
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
}
