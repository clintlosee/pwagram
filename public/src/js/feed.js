var shareImageButton = document.querySelector('#share-image-button');
var sharedMomentsArea  = document.querySelector('#shared-moments');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
    createPostArea.style.display = 'block';
    if (deferrredPrompt) {
        deferrredPrompt.prompt();
        deferrredPrompt.userChoice.then(function (choiceResult) {
            console.log(choiceResult.outcome);
            if (choiceResult.outcome === 'dismissed') {
                console.log('User cancelled installation');
            } else {
                console.log('User added to home screen');
            }
        });
        deferrredPrompt = null;
    }
}

function closeCreatePostModal() {
    createPostArea.style.display = 'none';
}

// allows to cache assets on demand
// function onSaveButtonClicked() {
//     console.log('Save Button Clicked');
//     if (caches in window) {
//         caches.open('user-requested')
//             .then(function(cache) {
//                 cache.add('https://httpbin.org/get');
//                 cache.add('/src/images/sf-boat.jpg');
//             });

//     }
// }

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);

function createCard() {
    var cardWrapper = document.createElement('div');
    cardWrapper.className = 'shared-moment-card mdl-card mdl-shadow--2dp';
    var cardTitle = document.createElement('div');
    cardTitle.className = 'mdl-card__title';
    cardTitle.style.backgroundImage = 'url("/src/images/sf-boat.jpg")';
    cardTitle.style.backgroundSize = 'cover';
    cardTitle.style.height = '180px';
    cardWrapper.appendChild(cardTitle);
    var cardTitleTextElement = document.createElement('h2');
    cardTitleTextElement.className = 'mdl-card__title-text';
    cardTitleTextElement.textContent = 'San Francisco Trip';
    cardTitle.appendChild(cardTitleTextElement);
    var cardSupportingText = document.createElement('div');
    cardSupportingText.className = 'mdl-card__supporting-text';
    cardSupportingText.textContent = 'In San Francisco';
    cardSupportingText.style.textAlign = 'center';
    // var cardSaveButton = document.createElement('button');
    // cardSaveButton.textContent = 'Save';
    // cardSupportingText.appendChild(cardSaveButton);
    // cardSaveButton.addEventListener('click', onSaveButtonClicked);
    cardWrapper.appendChild(cardSupportingText);
    componentHandler.upgradeElement(cardWrapper);
    sharedMomentsArea.appendChild(cardWrapper);
  }

  fetch('https://httpbin.org/get')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      createCard();
    });
