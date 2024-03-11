import { createFetch } from "@vueuse/core"

export class ApiError extends Error {

}

const cf = createFetch({
    combination: 'overwrite',
    options: {
        timeout: 60000,
        beforeFetch(ctx) {
            // @ts-ignore
            ctx.options.headers['Content-Type'] = 'application/json'

            return ctx
        },
        onFetchError(ctx) {
            const response = ctx.response
            const data = ctx.data

            return ctx
        },
        afterFetch(ctx) {
            const newToken = ctx.response.headers.get('Authorization')

            if (newToken) {
                localStorage.setItem('Token', newToken)
            }

            return ctx
        },
    },
    fetchOptions: {
        credentials: 'include'
    }
})

const buildQueryString = (parameters: any) => {
    return Object.keys(parameters)
            .filter((key) => parameters[key] != null && parameters[key] != undefined)
            .map((key) => key + '=' + parameters[key])
            .join('&')
}

export const customFetch = {
    get(url: string, param?: any) {
        let queryStr = ''
        if (param) {
            queryStr = '?' + buildQueryString(param)
        }

        return cf(url + queryStr)
                .get()
                .json()
    },
    post(url: string, body: any) {
        return cf(url)
                .post(body)
                .json()
    },
    put(url: string, body: any) {
        return cf(url)
                .put(body)
                .json()
    },
    delete(url: string, body: any) {
        return cf(url)
                .delete(body)
                .json()
    }
}