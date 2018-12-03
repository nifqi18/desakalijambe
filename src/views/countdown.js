/**
 * Countdown
 * Hopefully it’s the final one
 */

import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Cell from '../components/Cell';
import Heading from '../components/Heading';
import Subheading from '../components/Subheading';

const Timer = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 0 0 3px rgb(0, 16, 48);
  font-style: italic;
  padding: 16px;
  text-align: center;
`;

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.tick.bind(this);
  }

  componentWillMount() {
    this.setState({ daysLeft: '' });
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  daysUntil2020() {
    const then = moment([2019, 1, 1]);
    const now = moment();

    const years = then.diff(now, 'years');
    now.add(years, 'years');
    const months = then.diff(now, 'months');
    now.add(months, 'months');
    const days = then.diff(now, 'days');
    now.add(days, 'days');
    const hours = then.diff(now, 'hours');
    now.add(hours, 'hours');
    const minutes = then.diff(now, 'minutes');
    now.add(minutes, 'minutes');
    const seconds = then.diff(now, 'seconds');
    now.add(seconds, 'seconds');

    return `${years} Tahun ${years === 1 ? '' : 's'}, ${months} Bulan${months === 1 ? '' : 's'}, ${days} Hari ${days === 1 ? '' : 's'}, ${hours} Jam${hours === 1 ? '' : 's'}, ${minutes} Menit ${minutes === 1 ? '' : 's'}, ${seconds} Second${seconds === 1 ? '' : 's'}`;
  }

  tick() {
    this.setState({ daysLeft: this.daysUntil2020() });
  }

  render() {
    return (
      <Cell>
        <Heading>Pembukaan Website Awal </Heading>
        <Subheading>🎉 Dibuka Jan 1, 2020! 🎉</Subheading>
        <Timer>
          {this.state.daysLeft}
        </Timer>
      </Cell>
    );
  }
}

export default Countdown;
