define("/services.js", ["axios"], (axios) => {
    

    axios.post("/datastore", {
        namespace: "test",
        action: "put",
        key: "hello",
        value: "oh my god look at thow long this thing is it's going forever"
    }).then((result) => {
        axios.post("/datastore", {
            namespace: "test",
            action: "get",
            key: "hello",
        }).then((result) => {
            console.log(result.data);
        })
    })
    // setInterval(() => {
    //     axios.post("/dev/list_apps")
    // }, 1000);

    return {
        websites: {

        },
        themes: {

        },
        apps: {

        },
        modules: {

        },
        libraries: {

        },
        settings: {

        },
        status: {

        },
        security: {

        }
    }
});