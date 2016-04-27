import angular from 'angular';
import sum from './sum';

export default angular
	.module('sum', [])
	.constant('sum', sum);