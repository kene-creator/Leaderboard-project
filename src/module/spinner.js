import icon from '../../img/icon.svg';

export const renderSpinner = () => {
  const container = document.querySelector('.score-items');
  const markup = `
    <div class="spinner">
            <svg>
              <use href="${icon}#icon-loader"></use>
            </svg>
          </div>`;
  container.insertAdjacentHTML('beforeend', markup);
};
