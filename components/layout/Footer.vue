<template>
  <div class="footer">
    <div class="container">
      <p>Copyright &copy; <span id="copyright-year"></span>
        <script>document.getElementById('copyright-year').innerHTML = new Date().getFullYear();</script>
        Market Traders Institute, Inc. All Rights Reserved.
      </p>

      <p>Our address is 3900 Millenia Blvd Suite 200, Orlando, Florida, 32839, United States of America</p>

      <p>Trading foreign exchange on margin carries a high level of risk, and may not be suitable for everyone. Past
        performance is not indicative of future results. The high degree of leverage can work against you as well as for
        you. Before getting involved in foreign exchange you should carefully consider your personal venture objectives,
        level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of
        your initial deposit and therefore you should not place funds that you cannot afford to lose. You should be
        aware of all the risks associated with foreign exchange trading, and seek advice from an independent financial
        advisor if you have any doubts. The information contained in this web page does not constitute financial advice
        or a solicitation to buy or sell any Forex contract or securities of any type. MTI will not accept liability for
        any loss or damage, including without limitation any loss of profit, which may arise directly or indirectly from
        use of or reliance on such information.</p>

      <p>The information contained in this advertisement is subject to the terms and conditions in our
        <a href="http://www.markettraders.com/about-fx-company/general-disclaimer/" target="_blank">GENERAL DISCLAIMER</a>,
        <a href="http://www.markettraders.com/forex-risk-disclaimer/" target="_blank">RISK DISCLAIMER</a> and
        <a href="http://www.markettraders.com/privacy-policy/" target="_blank">PRIVACY POLICY</a>.</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
.footer {
  margin-top: 30px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.666rem;
  color: #1c1c1c;
  a{
    color: #1c1c1c;
    text-decoration: underline;
  }
}
</style>
