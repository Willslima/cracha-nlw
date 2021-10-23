function getGitHubProfileInfo() {
  const url = 'https://api.github.com/users/willslima'

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { login, avatar_url, url, bio } = data

      document.querySelector('p').textContent = bio
      document.querySelectorAll('img')[1].attributes[0].textContent = avatar_url
    })
    .catch(err => console.log(err))
}

getGitHubProfileInfo()
