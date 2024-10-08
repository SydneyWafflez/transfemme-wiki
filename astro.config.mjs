import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
	site: 'https://transfemme.wiki',
	integrations: [
		starlight({
			head: [
				{
				  tag: 'script',
				  attrs: {
					src: 'https://horizon.syd.gg/script.js',
					'data-website-id': 'e137a7b8-4bc6-418f-bbfb-8875c80fb07d',
					defer: true,
				  },
				},
			],
			plugins: [starlightLinksValidator()],
			title: 'Transfemme.wiki',
			logo: {
				src: './src/assets/logo.png'
			},
			social: {
				discord: 'https://discord.gg/35bvvAaRhQ',
				github: 'https://github.com/SydneyWafflez/transfemme-wiki',
				mastodon: 'https://estrogen.gg/@notices',
			},
			sidebar: [
				{
					label: 'Start here!',
					items: [
						{ label: 'Home Page', slug: 'start/home' }, 
					],
				},
				{
					label: 'Emergency Resources',
					items: [
						{ label: 'Crisis Lifelines', slug: 'emergency/lifelines' }, 
						{ label: 'Relocation & Shelter Help', slug: 'emergency/relocation'},
					],
				},
				{
					label: 'General Information',
					collapsed: true,
					items: [
						{ label: 'Common Medications', slug: 'general/meds' }, 
					],
				},
				{
					label: 'Countries',
					collapsed: true,
					items: [
					  'extras/restrictive',
					  'extras/missing',
					  {
						label: 'North America',
						collapsed: true,
						items: [
					  { label: 'Canada', slug: 'countries/canada' },
					  { label: 'Mexico', slug: 'countries/mexico' },
					  { label: 'The United States', slug: 'countries/us' },
						],
					  },
					  {
						label: 'Europe',
						collapsed: true,
						items: [
					  { label: 'Iceland', slug: 'countries/iceland'},
					  { label: 'The United Kingdom', slug: 'countries/uk' },
						],
					  },
					],
				  },
				{
					label: 'Extras',
					collapsed: true,
					items: [
						{ label: 'Contributors', slug: 'extras/contributors' }, 
						{ label: 'PGP Key', slug: 'extras/pgp'},
					],
				},
				{
					label: 'Contact us!',
					items: [
						{ label: 'Join Our Discord', link: 'https://discord.gg/35bvvAaRhQ' }, 
						{ label: 'Estrogen.gg Profile', link: 'https://estrogen.gg/@transfemmewiki' }, 
					],
				},
			],
		}),
	],
});
