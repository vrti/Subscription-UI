const SET_ATTRIBUTE = 'SET_ATTRIBUTE'
export const SUBMIT = 'SUBMIT'

export const userTypes = [
    {
        name: "Developer",
        value: "dev"
    },
    {
        name: "Marketing",
        value: "mar"
    }
]

export const applicationTypes = [
    {
        name: "Services",
        value: "ser"
    },
    {
        name: "Web Application",
        value: "web"
    }
]

const initialState = {
    name: "",
    email: "",
    userType: "",
    company: "",
    applicationType: ""
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_ATTRIBUTE:
            let newState = {
                ...state,
            }
            newState[action.name] = action.value
            return newState;
        default:
            return state
    }
}

export function setAttribute(name, value) {
    return {
        type: SET_ATTRIBUTE,
        name: name,
        value: value
    }
}

export function submit() {
    return {
        type: SUBMIT
    }
}