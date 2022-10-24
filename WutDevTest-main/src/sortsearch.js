import React from 'react';

import InquiresList from './InquiryList.json';

class Inquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInquiries: null,
      answerStatus: 'all',
      data: InquiresList,
    };
  }
  handleSearch = (event) => {
    this.setState({ searchInquiries: event.target.value });
  };
  handleAnswer = (event) => {
    this.setState({ answerStatus: event.target.value });
  };
  render() {
    const padding = {
      padding: '20px',
    };
    const marginBottom = {
      marginBottom: '0px',
    };
    const row = {
      margin: '0px',
    };
    let inquiries = InquiresList.filter((data) => {
      if (this.state.searchInquiries !== null) {
        return data.user_code
          .toLowerCase()
          .includes(this.state.searchInquiries.toLowerCase());
      }

      return data;
    });

    if (this.state.answerStatus === 'answered') {
      inquiries.sort((a, b) => {
        if (a.answered < b.answered) return -1;
        if (a.answered > b.answered) return 1;
        return 0;
      });
    } else if (this.state.answerStatus === 'unanswered') {
      inquiries.sort((a, b) => {
        if (a.answered > b.answered) return -1;
        if (a.answered < b.answered) return 1;
        return 0;
      });
    }

    return (
      <div className='col-md-12 bg-gray' style={{ padding: '30px' }}>
        <div className='row' style={row}>
          <h3 className='roboto paragraph mgb-30'>Inquiries List</h3>
        </div>
        <div className='row border-radius-10 default-shadow' style={row}>
          <div className='col-md-12 bg-white border-radius-10' style={padding}>
            <div className='row'>
              <div className='col-md-6 flex all-center'>
                <i className='i fa fa-search table-search-icon' />
                <input
                  type='text'
                  onChange={this.handleSearch}
                  className='form-control'
                  style={{ borderRadius: '30px' }}
                  placeholder='Search'
                />
              </div>
              <div className='col-md-6 flex flex-end' style={row}>
                <select
                  name='inquiry-filter'
                  onChange={this.handleAnswer}
                  className='inquiry-filter'
                >
                  <option value='all'>All</option>
                  <option value='answered'>Answered</option>
                  <option value='unanswered'>Unanswered</option>
                </select>
              </div>
            </div>
          </div>
          <div className='col-md-12 bg-white' style={{ padding: '0px' }}>
            <table className='table table-striped table-hover table-bordered'>
              <thead>
                <tr>
                  <td>
                    <p className='paragraph' style={marginBottom}>
                      Created
                    </p>
                  </td>
                  <td>
                    <p className='paragraph' style={marginBottom}>
                      User Code
                    </p>
                  </td>
                  <td>
                    <p className='paragraph' style={marginBottom}>
                      Email
                    </p>
                  </td>
                  <td>
                    <p className='paragraph' style={marginBottom}>
                      Subject
                    </p>
                  </td>
                  <td>
                    <p className='paragraph' style={marginBottom}>
                      Answer
                    </p>
                  </td>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inquiry) => (
                  <tr>
                    <td>
                      <h3 className='paragraph'>{inquiry.created_date}</h3>
                    </td>
                    <td>
                      <h3 className='paragraph' style={marginBottom}>
                        {inquiry.user_code}
                      </h3>
                    </td>
                    <td>
                      <p className='paragraph' style={marginBottom}>
                        {inquiry.email}
                      </p>
                    </td>
                    <td>
                      <p className='paragraph' style={marginBottom}>
                        {inquiry.subject}
                      </p>
                    </td>

                    <td>
                      <div className='custom-control custom-checkbox'>
                        {inquiry.answered ? (
                          <input
                            type='checkbox'
                            checked
                            className='custom-control-input'
                            id={'answer-status-' + inquiry.id}
                            name={'answer-status-' + inquiry.id}
                          />
                        ) : (
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id={'answer-status-' + inquiry.id}
                            name={'answer-status-' + inquiry.id}
                          />
                        )}
                        <label
                          className='custom-control-label'
                          for={'answer-status-' + inquiry.id}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='col-md-12 bg-white flex flex-end' style={padding}>
            <ul
              className='list list-inline pagination-list'
              style={marginBottom}
            >
              <li className='list-inline-item'>
                <button
                  type='button'
                  className='color-golden bg-white'
                  style={{
                    border: 'none',
                    boxShadow: '0px 0px 0px #ffff',
                    borderRight: '1px solid #d3d3d3',
                  }}
                >
                  Previous
                </button>
              </li>
              <li className='list-inline-item active bg-golden number-container'>
                1
              </li>
              <li className='list-inline-item number-container'>2</li>
              <li className='list-inline-item number-container'>3</li>
              <li className='list-inline-item number-container'>4</li>
              <li className='list-inline-item'>
                <button
                  type='button'
                  className='color-golden bg-white'
                  style={{
                    border: 'none',
                    boxShadow: '0px 0px 0px #ffff',
                    borderLeft: '1px solid #d3d3d3',
                  }}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Inquiry;


