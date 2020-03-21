import axios from 'axios';

interface EventTrackerOptions {}

/**
 * This function initializes a new instance of the tracking object
 * @param token API token.
 * @param config A dictionary of config options to override default config.
 * @returns distinctId.
 */
const init = async (token: string, config?: EventTrackerOptions) => {
    try {
        const response = await axios.get(`/api/init?token=${token}`);
        let { data } = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

/**
 * Track an event
 * @param eventName The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', etc.
 * @param properties A set of properties to include with the event you're sending
 * @returns If the tracking request was successfully initiated/queued,
 * an object with the tracking payload sent to the API server is returned; otherwise false.
 */
const track = (eventName: string, properties: any) => {
    return { eventName, properties };
};

/**
 * Register a set of super properties, which are included with all events.
 * @param properties  An associative array of properties to store about the user
 */
const register = (properties: any) => {
    return properties;
};

/**
 * Identify a user with a unique ID to track user activity across devices, tie a user to their events, and create a user profile. If you never call this method, unique visitors are tracked using a UUID generated the first time they visit the site.
 * @param uniqueId A string that uniquely identifies a user.
 * If not provided, the distinctId currently in the persistent store (cookie or localStorage) will be used.
 */
const identify = (uniqueId?: string) => {
    return uniqueId;
};

export { init, track, register, identify };
