/*jshint esversion: 6 */

import decode from 'jwt-decode';
import { NotificationManager } from 'react-notifications';
import axios from "axios";
import { apiUrl } from '../../App';

/**
 * Check if a user is logged in
 *
 *
 * ```js
 * isLoggedIn()
 * ```
 *
 * @returns {Boolean} Whether the user is logged in or not
 */
export const isLoggedIn = () => {
	if (localStorage.getItem("access_token") !== null) {
		let token = decode(localStorage.getItem("access_token"));
		if (token.exp < Date.now() / 1000) {
			localStorage.removeItem("access_token");
			clearUser();
			return false;
		}
		return true;
	}
	return false;
}

/**
 * Check if a list contains a specific item
 *
 * @param {array} listVar The list/haystack
 * @param {object} aVar The item/needle to find
 *
 * ```js
 * contains(listVar, aVar)
 * ```
 *
 * @returns {Boolean} Whether the listVar contains aVar
 */
export const contains = (listVar, aVar) => {
	var i;
	for (i = 0; i < listVar.length; i++) {
		if (listVar[i] === aVar) {
			return true;
		}
	}
	return false;
}

/**
 * Clear user data from the local storage
 *
 * ```js
 * clearUser()
 * ```
 *
 * @returns {None} Null
 */
export const clearUser = () => {
	localStorage.removeItem("username");
	localStorage.removeItem("first_name");
	localStorage.removeItem("last_name");
}

/**
 * Register a business
 *
 * @param {object} business Containing the Business object
 *
 * ```js
 * registerBusiness(business)
 * ```
 *
 * @returns {None} Null
 */
export const registerBusiness = (business) => {
	axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('access_token');
	axios.post(`${apiUrl}/businesses`, JSON.stringify(business), {
		headers: { 'Content-Type': 'application/json' }
	}).then(response => {
		NotificationManager.success(response.data.message);
	}).catch(error => {
		NotificationManager.error(error.response.data.message);
	});
}

/**
 * Update a business
 *
 * @param {BigInteger} id Business id
 * @param {object} business Containing the new Business object
 *
 * ```js
 * updateBusiness(props, business)
 * ```
 *
 * @returns {None} Null
 */
export const updateBusiness = (id, business) => {
	axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('access_token');
	return axios.put(`${apiUrl}/businesses/${id}`, JSON.stringify(business), {
		headers: { 'Content-Type': 'application/json' }
	}).then(response => {
		return response;
	}).catch(error => {
		throw error;
	});
}

/**
 * Delete a business
 *
 * @param {object} business Containing the Business object
 *
 * ```js
 * deleteBusiness(business)
 * ```
 *
 * @returns {None} Null
 */
export const deleteBusiness = (business) => {
	axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('access_token');
	axios.delete(`${apiUrl}/businesses/${business.id}`).then(response => {
		NotificationManager.success(response.data.message);
	}).catch(error => {
		NotificationManager.error(error.response.data.message);
	});
}

/**
 * Review a business
 *
 * @param {object} props Containing the Form callback function and Business object
 * @param {object} review Containing the Business review object
 *
 * ```js
 * reviewBusiness(props, review)
 * ```
 *
 * @returns {None} Null
 */
export const reviewBusiness = (props, review) => {
	axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('access_token');
	axios.post(`${apiUrl}/businesses/${props.business.id}/reviews`, JSON.stringify(review), {
		headers: { 'Content-Type': 'application/json' }
	}).then(response => {
		NotificationManager.success(response.data.message);
	}).catch();
}
