import React from 'react';
import '../components.css';

const BasicFunctionalComponent = () => {
  return(
    <div>
      <h3>This is a basic functional component</h3>
      <div className='about-holder'>
        <p>Functional components are also referred to as "presentational", "dumb" or "stateless" components.</p>
      </div>

      <pre>
        <code>
          <div className='code-holder'>
            <div className='code-snippet'>
              {
`    import React from 'react';
    import './BasicFunctionalComponent.css';

    const BasicFunctionalComponent = () => {
      return(
        <div>
          <h3>This is a basic functional component</h3>
          <pre>
            <code>
              <div className='code-holder'>
              <div className='code-snippet'>

              </div>
              </div>
            </code>
          </pre>
        </div>
      );
    }

    export default BasicFunctionalComponent;`}
            </div>
          </div>
        </code>
      </pre>
      <div className='code-holder'>
        <div className='code-note'>
            <h4>Note:</h4>
            <div>In order to display the code as html, the displayed text had to be wrapped in the following: </div>
            <pre>
              <code>
                <div className='code-holder'>
                  <div className='code-snippet'>
            {`
      <pre>
        <code>
          <div className='code-holder'>
            <div className='code-snippet'>
              ...JSX Text Here...
            </div>
          </div>
        </code>
      </pre>`
          }
                </div>
              </div>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default BasicFunctionalComponent;
