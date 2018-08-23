import React from 'react';
import '../components.css';

class BasicClassComponent extends React.Component {
  render(){
    return(
      <div>
        <h3>This is a basic class component</h3>
        <p>Class components are also refered to as "containers", "smart" or "stateful" components.</p>
        <pre>
          <code>
            <div className='code-holder'>
              <div className='code-snippet'>
                {
      `
      import React from 'react';

      class BasicClassComponent extends React.Component {
        render(){
          return(
            <div>
              <h3>This is a basic class component</h3>
              <p>Class components are also refered to as
                "containers", "smart" or "stateful" components.
                </p>
              <pre>
                <code>
                  <div className='code-holder'>
                    <div className='code-snippet'>
                      {

                      }
                    </div>
                  </div>
                </code>
              </pre>
            </div>
          );
        }
      }
      `
                }
              </div>
            </div>
          </code>
        </pre>
      </div>
    );
  }
}

export default BasicClassComponent;
