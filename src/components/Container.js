import '../stylesheets/Container.css'

function Container() {
  return (
    <div id='container'>
      <div class="cover">
        <div class="book">
          <label htmlFor="page-1"  class="book__page book__page--1">
            <h1>THIS IS PAGE 1</h1>
            <div class="page__number">1</div>
          </label>
        
          <label htmlFor="page-last" class="book__page book__page--last">
            <div class="page__content">
              <h1>THIS IS PAGE last</h1>
              <div class="page__number">last</div>
            </div>
          </label>

          {/* <!-- Resets the page --> */}
          <input type="radio" name="page" id="page-1"/>
            
          {/* <!-- Goes to the second page --> */}
          <input type="radio" name="page" id="page-last"/>


          <label class="book__page book__page--2">
            <div class="book__page-front">
              <div class="page__content">
                <h1>THIS IS PAGE 2</h1>
                <div class="page__number">2</div>
              </div>
            </div>
            <div class="book__page-back">
              <div class="page__content">
                <h1>THIS IS PAGE 3</h1>
                <div class="page__number">3</div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Container;