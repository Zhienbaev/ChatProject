import React, { Component } from 'react';

class BitcoinPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchBitcoinPrice();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.showBitcoin !== prevProps.showBitcoin) {
        this.fetchBitcoinPrice();
      }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
  }

  fetchBitcoinPrice = async () => {
    try {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      if (!response.ok) {
        throw new Error('Повторите попытку позже!');
      }
      const data = await response.json();
      const { bpi } = data;
      const price = bpi?.USD?.rate || 'N/A';
      this.setState({ price, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { price, loading, error } = this.state;

    if (loading) {
      return <div className='bitcoin' >Loading...</div>;
    }

    if (error) {
      return <div className='bitcoin' >Error: {error}</div>;
    }

    return (
      <div className='bitcoin'>
        <h2>Bitcoin Price</h2>
        <p> {price} $</p>
      </div>
    );
  }
}

export default BitcoinPrice;
