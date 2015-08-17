function requestGACalendar(url, settings) {
  if (settings) {
    url += '?';
    for (var prop in settings) {
      url += prop;
      url += '=';
      url += settings[prop];
      url += '&';
    }
    url = url.substring(0, url.length - 1);
  }
  return $.ajax(url);
}

function extractContent(string, index) {
  return string.split('<br />')[index].trim();
}

function extractDate(string) {
  return extractContent(string, 0);
}

function extractLocation(string) {
  return extractContent(string, 2);
}

var Event = React.createClass({
  handleClick: function() {
    var event = this.props.event;
    var link = event.link[0].href;
    window.open(link, '_blank');
  },

  render: function() {
    var event = this.props.event;
    var title = event.title.$t;
    var date = extractDate(event.content.$t);
    var location = extractLocation(event.content.$t);
    return (
      <div onClick={this.handleClick} className='calendar-event'>
        <h3 className='title'>{title}</h3>
        <p>{date}</p>
        <p>{location}</p>
      </div>
    );
  }
});

var EventList = React.createClass({
  getInitialState: function() {
    return {
      events: []
    };
  },

  componentDidMount: function() {
    var cb = function(data) {
      var events = data.feed.entry;
      this.setState({
        events: events
      });
    }.bind(this);
    requestGACalendar('https://www.google.com/calendar/feeds/pittcsc@gmail.com/public/basic', {
      'max-results': 5,
      alt: 'json',
      futureevents: true,
      orderby: 'starttime',
      singleevents: 'true',
      sortorder: 'ascending'
    })
    .then(cb);
  },

  render: function() {
    var events = this.state.events;
    return (
      <div>
        {events.map(function(data) {
          var id = data.id.$t;
          return <Event key={id} event={data} />;
        })}
      </div>
    );
  }
});

React.render(
  <EventList />,
  document.getElementById('react-calendar')
);
