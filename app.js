(() => {
    const scrollableDiv = document.querySelector('.scrollable')
    const list = document.querySelector('.scrollable > ul')
    const messageSpan = document.querySelector('span')

    let isLoading = false

    const setLoading = (status) => {
        isLoading = status // Set Loading status
        messageSpan.style.display = status ? 'block' : 'none'; // Update the loader visibility
    }

    const callServiceToUpdateTheList = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Fake append list
                list.innerHTML += list.innerHTML

                // Resolve the fake Server
                resolve()
            }, Math.random() * (2000 - 500) + 500); // Fakes variable response time
        })
    }

    const updateList = async () => {
        // Sets the loader to true
        setLoading(true)

        // Fake Service Call to append list
        await callServiceToUpdateTheList()

        // Reset Loading Variable
        setLoading(false)
    }


    const listHeight = scrollableDiv.offsetHeight
    scrollableDiv.addEventListener('scroll', (_) => {
        let listEnd = scrollableDiv.scrollHeight - listHeight // The listEnd is it's scrollable height plus it's component height
        let scrollPosition = scrollableDiv.scrollTop // The current position of scroll

        console.log(`scrollTop`, { current: scrollPosition, max: listEnd }); // Debug purposes
        if (scrollPosition >= (listEnd * 0.8) && !isLoading) { // Check if the user hits 80% of the list
            updateList()
        }
    })
})();