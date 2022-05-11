
const apiPath = "http://localhost:4050/api/v1/"

export default {

    get(route, cbfunc) {
        axios.get(apiPath + route)
            .then(function (response) {
                console.log(response.data);
                cbfunc(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    delete(route, id, cbfunc) {
        let bodyFormData = new URLSearchParams();
        bodyFormData.append('id', id);
        axios({
            method: "delete",
            url: apiPath + route,
            data: bodyFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }).then(function (response) {
            console.log(response.data);
            cbfunc(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    },

    post(route, data, cbfunc) {
        let bodyFormData = new URLSearchParams();
        for (let key in data) {
            bodyFormData.append(key, data[key]);
        }
        axios({
            method: "post",
            url: apiPath + route,
            data: bodyFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }).then(function (response) {
            console.log(response.data);
            cbfunc(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    },

    put(route, data, cbfunc) {
        let bodyFormData = new URLSearchParams();
        for (let key in data) {
            bodyFormData.append(key, data[key]);
        }
        axios({
            method: "put",
            url: apiPath + route,
            data: bodyFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }).then(function (response) {
            console.log(response.data);
            cbfunc(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }
}