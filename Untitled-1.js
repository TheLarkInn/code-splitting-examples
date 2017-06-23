import Listener from './listeners.js';                        //eslint-disable-line

const getModal = () => import('./src/modal.js');

Listener.on('didSomethingToWarrentModalBeingLoaded', () => {
  // Async fetching modal code from a separate chunk
  getModal.then((module) => {
    const modalTarget = document.getElementById('Modal');
    module.initModal(modalTarget);
  });
});
