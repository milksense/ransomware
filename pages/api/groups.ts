import { v5 as uuidv5 } from 'uuid'
import { GroupType } from '../../types'

export default (_req, res) => {
	const groups: GroupType[] = [
		{
			id: uuidv5(
				'http://bc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patvdqxucdaxxedumhqicpad.onion/',
				uuidv5.URL
			),
			name: 'Arvin Club',
			description: 'RaaS',
			onionVersion: 'v3',
			status: 'active',
			avatar:
				'https://cdn4.telegram-cdn.org/file/SATQYqpdUTxa7o8uFxVa3km-EgIgGNotSyEiqav6NfY2vQlA5vqU3D7vUyKkdAkrG8YdPZnVSVQv-bPSpmYnhCdJoprY1WKPG4RfrcE0XdRvTwvzZvpw7FEHFshz5P_dkShx2NCg1h8Iz2myEM5POIM3V-g5qaZPUh61Ks3K13AhCio6r_6Qm5BZ9UkboyqwaBilACXjrGc7BFEgJ5YEZtE18cLjThJzKPsZTCztUfixSIygnCXmsFvMIZiuzwNeoPSWBaCqwnP2f1cdbQcpZp6s0nhCiEBvXP33vvM1Bs-jgk5w9VVX6etzuQbKbYKOkluI7COGDK2WyQzduEAtwg.jpg',
			uri: 'http://bc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patvdqxucdaxxedumhqicpad.onion/',
		},
		{
			id: uuidv5(
				'http://nq4zyac4ukl4tykmidbzgdlvaboqeqsemkp4t35bzvjeve6zm2lqcjid.onion/',
				uuidv5.URL
			),
			name: 'Babuk',
			description: '',
			onionVersion: 'v3',
			status: 'vacation',
			avatar: '',
			uri: 'http://nq4zyac4ukl4tykmidbzgdlvaboqeqsemkp4t35bzvjeve6zm2lqcjid.onion/',
		},
		{
			id: uuidv5(
				'https://stniiomyjliimcgkvdszvgenbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patlffqd.onion/',
				uuidv5.URL
			),
			name: 'Black Basta',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'https://stniiomyjliimcgkvdszvgenbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patlffqd.onion/',
		},
		{
			id: uuidv5(
				'http://alphvmmm27o3abo3r2mlmjrpdmzlebc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
				uuidv5.URL
			),
			name: 'AlphaVM/BlackCat',
			description: 'RaaS',
			onionVersion: 'v3',
			status: 'unknown',
			avatar:
				'https://www.speartip.com/wp-content/uploads/2021/12/FGHqTLrXsAUltfF.png',
			uri: 'http://alphvmmm27o3abo3r2mlmjrpdmzlebc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
		},
		{
			id: uuidv5(
				'http://ce6roic2ykdjunyzazsxmjpz5wsar4pflpoqzntyww5c2eskcp7dq4yd.onion/',
				uuidv5.URL
			),
			name: 'BlackByte',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar:
				'https://cdn.wethegeek.com/wp-content/uploads/2022/02/Blackbyte-Ransomware.png',
			uri: 'http://ce6roic2ykdjunyzazsxmjpz5wsar4pflpoqzntyww5c2eskcp7dq4yd.onion/',
		},
		{
			id: uuidv5(
				'http://bl4cktorpms2gybrcyt52aakcxt6ynbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
				uuidv5.URL
			),
			name: 'Bl4ckt0r',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://bl4cktorpms2gybrcyt52aakcxt6ynbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
		},
		{
			id: uuidv5(
				'http://santat7kpllt6iyvqbr7q4amdv6dzrh6paatvyrzl7ry3zm72zigf4ad.onion/',
				uuidv5.URL
			),
			name: 'CL0P',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://santat7kpllt6iyvqbr7q4amdv6dzrh6paatvyrzl7ry3zm72zigf4ad.onion/',
		},
		{
			id: uuidv5(
				'http://continewsnv5otx5kaoje7krkto2qbu3gtqef22mnr7eaxw3y6ncz3ad.onion/',
				uuidv5.URL
			),
			name: 'CONTI',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6qa87y3563Hq8kukBXPzcf_WcdlVIZ1YZW-vwLAVBZY4qxE2IT7nzdA',
			uri: 'http://continewsnv5otx5kaoje7krkto2qbu3gtqef22mnr7eaxw3y6ncz3ad.onion/',
		},
		{
			id: uuidv5(
				'http://7k4yyskpzbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patxopmt7tq7eid.onion/',
				uuidv5.URL
			),
			name: 'CRYP70N1C0D3',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://7k4yyskpzbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patxopmt7tq7eid.onion/',
		},
		{
			id: uuidv5(
				'http://cuba4ikm4jakjgmkezytyawtdgr2xymvy6nvzgw5cglswg3si76icnqd.onion/',
				uuidv5.URL
			),
			name: 'Cuba',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://cuba4ikm4jakjgmkezytyawtdgr2xymvy6nvzgw5cglswg3si76icnqd.onion/',
		},
		{
			id: uuidv5(
				'http://ransomocmou6mnbquqz44ewosbkjk3o5qjsl3orawojexfook2j7esad.onion/',
				uuidv5.URL
			),
			name: 'Everest',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://ransomocmou6mnbquqz44ewosbkjk3o5qjsl3orawojexfook2j7esad.onion/',
		},
		{
			id: uuidv5(
				'http://griefcameifmv4hfrbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patteid.onion/',
				uuidv5.URL
			),
			name: 'Grief',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://griefcameifmv4hfrbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patteid.onion/',
		},
		{
			id: uuidv5(
				'http://hiveleakdbtnp76ulyhi52eag6c6tyc3xw7ez7iqy6wc34gd2nekazyd.onion/',
				uuidv5.URL
			),
			name: 'Hive',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://hiveleakdbtnp76ulyhi52eag6c6tyc3xw7ez7iqy6wc34gd2nekazyd.onion/',
		},
		{
			id: uuidv5(
				'http://matmqbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5paty4tqtypoycszqzqd.onion/',
				uuidv5.URL
			),
			name: 'HolyGhost',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://matmqbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5paty4tqtypoycszqzqd.onion/',
		},
		{
			id: uuidv5(
				'https://lhxxtrqraokn6bc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patz7n4kcyd.onion/',
				uuidv5.URL
			),
			name: 'Karakurt',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'https://lhxxtrqraokn6bc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patz7n4kcyd.onion/',
		},
		{
			id: uuidv5('https://kelvinsecteamcyber.wixsite.com/', uuidv5.URL),
			name: 'KelvinSecurity',
			description: '',
			onionVersion: 'DEEP-WEB',
			status: 'active',
			avatar: '',
			uri: 'https://kelvinsecteamcyber.wixsite.com/',
		},
		{
			id: uuidv5(
				'http://lockbitapt6vx57t3eeqjofwgcglmutr3a35nygvokja5uuccip4ykyd.onion/',
				uuidv5.URL
			),
			name: 'LockBit 2.0',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://lockbitapt6vx57t3eeqjofwgcglmutr3a35nygvokja5uuccip4ykyd.onion/',
		},
		{
			id: uuidv5(
				'http://wm6mbuzipviusuc42kcggzkdpbhuv45sn7olyamy6mcqqked3waslbqd.onion/',
				uuidv5.URL
			),
			name: 'LockData Auction',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://wm6mbuzipviusuc42kcggzkdpbhuv45sn7olyamy6mcqqked3waslbqd.onion/',
		},
		{
			id: uuidv5(
				'http://lorenzmlwpzgxq7bc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patlpkyxk6ksoyd.onion/',
				uuidv5.URL
			),
			name: 'Lorenz',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://lorenzmlwpzgxq7bc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patlpkyxk6ksoyd.onion/',
		},
		{
			id: uuidv5(
				'http://4qbxi3i2oqmyzxsjg4fwe4alybc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
				uuidv5.URL
			),
			name: 'LV BLOG',
			description: '',
			onionVersion: 'v3',
			status: 'vacation',
			avatar: '',
			uri: 'http://4qbxi3i2oqmyzxsjg4fwe4alybc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
		},
		{
			id: uuidv5(
				'http://qd7pcafncosqfqubc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pateqv5yd.onion/',
				uuidv5.URL
			),
			name: 'Medusa',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://qd7pcafncosqfqubc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pateqv5yd.onion/',
		},
		{
			id: uuidv5(
				'http://midasbkic5eyfox4dhnijkzc7v7e4hpmsb2qgux7diqbpna4up4rtdad.onion/',
				uuidv5.URL
			),
			name: 'Midas',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://midasbkic5eyfox4dhnijkzc7v7e4hpmsb2qgux7diqbpna4up4rtdad.onion/',
		},
		{
			id: uuidv5('http://moses-staff.se/', uuidv5.URL),
			name: 'Moses Staff',
			description: '',
			onionVersion: 'v2',
			status: 'active',
			avatar: '',
			uri: 'http://moses-staff.se/',
		},
		{
			id: uuidv5(
				'http://vbfqeh5nugm6r2u2qvghsdxm3fotf5wbxb5ltv6vw77vus5frdpuaiid.onion/',
				uuidv5.URL
			),
			name: 'Pandora',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://vbfqeh5nugm6r2u2qvghsdxm3fotf5wbxb5ltv6vw77vus5frdpuaiid.onion/',
		},
		{
			id: uuidv5(
				'http://pay2key2zkg7arpbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patw2asid.onion/',
				uuidv5.URL
			),
			name: 'Pay2Key',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://pay2key2zkg7arpbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patw2asid.onion/',
		},
		{
			id: uuidv5(
				'http://cpxnv7smpnrbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patnyvamkviad.onion/',
				uuidv5.URL
			),
			name: 'Quantum',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://cpxnv7smpnrbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patnyvamkviad.onion/',
		},
		{
			id: uuidv5(
				'http://rgleaktxuey67yrgspmhvtnrqtgogur35lwdrup4d3igtbm3pupc4lyd.onion/',
				uuidv5.URL
			),
			name: 'Ragnar_Locker',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://rgleaktxuey67yrgspmhvtnrqtgogur35lwdrup4d3igtbm3pupc4lyd.onion/',
		},
		{
			id: uuidv5(
				'http://wavbeudogz6byhnardd2lkp2jafimsbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
				uuidv5.URL
			),
			name: 'RAMP',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://wavbeudogz6byhnardd2lkp2jafimsbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
		},
		{
			id: uuidv5(
				'http://u67aylig7i6l657wxmp274eoilaowhp3boljowa6bli63rxyzfzsbtyd.onion/',
				uuidv5.URL
			),
			name: 'Ransom Cartel',
			description: 'RaaS',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://u67aylig7i6l657wxmp274eoilaowhp3boljowa6bli63rxyzfzsbtyd.onion/',
		},
		{
			id: uuidv5(
				'http://xw7au5pnwtl6lozbsudkmydbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
				uuidv5.URL
			),
			name: 'Ransom House',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://xw7au5pnwtl6lozbsudkmydbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
		},
		{
			id: uuidv5(
				'http://rnsm777cdsjrsdlbs4v5qoeppubc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
				uuidv5.URL
			),
			name: 'RansomEXX',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://rnsm777cdsjrsdlbs4v5qoeppubc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
		},
		{
			id: uuidv5(
				'http://blogxxu75w63ujqarv476otld7cyjkq4yoswzt4ijadkjwvg3vrvd5yd.onion/',
				uuidv5.URL
			),
			name: 'REvil',
			description: 'RaaS',
			onionVersion: 'v3',
			status: 'vacation',
			avatar: '',
			uri: 'http://blogxxu75w63ujqarv476otld7cyjkq4yoswzt4ijadkjwvg3vrvd5yd.onion/',
		},
		{
			id: uuidv5(
				'http://hl66646wtlp2naoqnhattngigjp5palgqmbwixepcjyq5i534acgqyad.onion/',
				uuidv5.URL
			),
			name: 'Snatch',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://hl66646wtlp2naoqnhattngigjp5palgqmbwixepcjyq5i534acgqyad.onion/',
		},
		{
			id: uuidv5(
				'http://3slz4povugieoi3tw7sblxoowxhbzxeju427cffsst5fo2tizepwatid.onion/',
				uuidv5.URL
			),
			name: 'Stormous',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://3slz4povugieoi3tw7sblxoowxhbzxeju427cffsst5fo2tizepwatid.onion/',
		},
		{
			id: uuidv5(
				'http://mrdxtxy6vqeqbmb4rvbvueh2kukbbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
				uuidv5.URL
			),
			name: 'Onyx',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://mrdxtxy6vqeqbmb4rvbvueh2kukbbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
		},
		{
			id: uuidv5(
				'http://vsociethok6sbprvevl4dlwbqrzyhxcxaqpvcqt5belwvsuxaxsutyad.onion/',
				uuidv5.URL
			),
			name: 'Vice Society',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://vsociethok6sbprvevl4dlwbqrzyhxcxaqpvcqt5belwvsuxaxsutyad.onion/',
		},
		{
			id: uuidv5(
				'http://nalr2uqsave7y2r235am5jsfiklfjh5h4jc5nztu3rzvmhklwt5j6kid.onion/',
				uuidv5.URL
			),
			name: 'x001xs',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://nalr2uqsave7y2r235am5jsfiklfjh5h4jc5nztu3rzvmhklwt5j6kid.onion/',
		},
		{
			id: uuidv5(
				'http://6iajbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat45tlfafyja6q4ctqd.onion/',
				uuidv5.URL
			),
			name: 'BlackByte Auction',
			description: 'Ransomware Market',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://6iajbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat45tlfafyja6q4ctqd.onion/',
		},
		{
			id: uuidv5(
				'http://54rdhzjzc4ids4u4wata4zr4ywfon5wpz2ml4q3avelgadpvmdal2vqd.onion/',
				uuidv5.URL
			),
			name: 'Dark Leak Market',
			description: 'Ransomware Market',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://54rdhzjzc4ids4u4wata4zr4ywfon5wpz2ml4q3avelgadpvmdal2vqd.onion/',
		},
		{
			id: uuidv5(
				'http://spyarea23ttlty6qav3ecmbclpqym3p32lksanoypvrqm6j5onstsjad.onion/',
				uuidv5.URL
			),
			name: 'Industrial Spy',
			description: 'Ransomware Market',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://spyarea23ttlty6qav3ecmbclpqym3p32lksanoypvrqm6j5onstsjad.onion/',
		},
		{
			id: uuidv5(
				'http://jvdamsif53dqjycuozlaye2s47p7xij4x6hzwzwhzrqmv36gkyzohhqd.onion/',
				uuidv5.URL
			),
			name: 'Marketo',
			description: 'Ransomware Market',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://jvdamsif53dqjycuozlaye2s47p7xij4x6hzwzwhzrqmv36gkyzohhqd.onion/',
		},

		{
			id: uuidv5(
				'http://54bb47h5qu4k7l4d7v5ix3i6ak6elysn3net4by4ihmvrhu7cvbskoqd.onion/blog',
				uuidv5.URL
			),
			name: '54bb47h',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://54bb47h5qu4k7l4d7v5ix3i6ak6elysn3net4by4ihmvrhu7cvbskoqd.onion/blog',
		},
		{
			id: uuidv5(
				'http://anewsetbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patblhmql55tvgqad.onion/',
				uuidv5.URL
			),
			name: 'Astro Team',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://anewsetbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patblhmql55tvgqad.onion/',
		},
		{
			id: uuidv5(
				'http://mhdehvkomeabau7gsetnsrhkfign4jgnx3wajth5yb5h6kvzbd72wlqd.onion/',
				uuidv5.URL
			),
			name: 'AtomSilo',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://mhdehvkomeabau7gsetnsrhkfign4jgnx3wajth5yb5h6kvzbd72wlqd.onion/',
		},
		{
			id: uuidv5(
				'http://avosqxh72b5ia23dl5fgwcpndkctuzqvh2iefk5imp3pi5gfhel5klad.onion/',
				uuidv5.URL
			),
			name: 'AvosLocker',
			description: 'RaaS',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://avosqxh72b5ia23dl5fgwcpndkctuzqvh2iefk5imp3pi5gfhel5klad.onion/',
		},
		{
			id: uuidv5('http://avaddongun7rngel.onion/', uuidv5.URL),
			name: 'Avaddon',
			description: '',
			onionVersion: 'v2',
			status: 'active',
			avatar: '',
			uri: 'http://avaddongun7rngel.onion/',
		},
		{
			id: uuidv5(
				'http://blackmax7su6mbwtcyobc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patyd.onion/',
				uuidv5.URL
			),
			name: 'BlackMatter',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://blackmax7su6mbwtcyobc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patyd.onion/',
		},
		{
			id: uuidv5('http://544corkfh5hwhtn4.onion/', uuidv5.URL),
			name: 'Black Shadow',
			description: '',
			onionVersion: 'v2',
			status: 'active',
			avatar: '',
			uri: 'http://544corkfh5hwhtn4.onion/',
		},
		{
			id: uuidv5(
				'http://bonacifryrxr4siz6ptvokuihdzmjzpveruklxumflz5thmkgauty2qd.onion/',
				uuidv5.URL
			),
			name: 'Bonaci Group',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://bonacifryrxr4siz6ptvokuihdzmjzpveruklxumflz5thmkgauty2qd.onion/',
		},
		{
			id: uuidv5(
				'http://z6mikrtphid5fmn52nbcbg25tj57sowlm3oc25g563yvsfmygkcxqbyd.onion/',
				uuidv5.URL
			),
			name: 'CoomingProject',
			description: '',
			onionVersion: 'v3',
			status: 'paused',
			avatar: '',
			uri: 'http://z6mikrtphid5fmn52nbcbg25tj57sowlm3oc25g563yvsfmygkcxqbyd.onion/',
		},
		{
			id: uuidv5(
				'http://darksidcbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patlaz3zirkmh4cnz6hhj7id.onion/',
				uuidv5.URL
			),
			name: 'Darkside',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://darksidcbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patlaz3zirkmh4cnz6hhj7id.onion/',
		},
		{
			id: uuidv5(
				'http://hpoo4dosa3x4ognfxpqcrjwnsigvslm7kv6hvmhh2yqczaxy3j6qnwad.onion/',
				uuidv5.URL
			),
			name: 'DoppelPaymer',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://hpoo4dosa3x4ognfxpqcrjwnsigvslm7kv6hvmhh2yqczaxy3j6qnwad.onion/',
		},
		{
			id: uuidv5(
				'http://leaksv7sroztl377bbohzl42i3ddlfsxopcb6355zc7olzigedm5agad.onion/',
				uuidv5.URL
			),
			name: 'Entropy',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://leaksv7sroztl377bbohzl42i3ddlfsxopcb6355zc7olzigedm5agad.onion/',
		},
		{
			id: uuidv5(
				'http://wsbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patm4dz5rrwvular7xvkqd.onion/',
				uuidv5.URL
			),
			name: 'Groove',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://wsbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patm4dz5rrwvular7xvkqd.onion/',
		},
		{
			id: uuidv5(
				'http://ft4zr2jzlqoyob7yg4fcpwytbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
				uuidv5.URL
			),
			name: 'Haron',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://ft4zr2jzlqoyob7yg4fcpwytbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
		},
		{
			id: uuidv5('http://hitleransomware.cf/', uuidv5.URL),
			name: 'Hitler',
			description: '',
			onionVersion: 'DEEP-WEB',
			status: 'active',
			avatar: '',
			uri: 'http://hitleransomware.cf/',
		},
		{
			id: uuidv5(
				'http://r6d636w47ncnaukrpvlhmtdbvbeltc6enfcuuow3jclpmyga7cz374qd.onion/',
				uuidv5.URL
			),
			name: 'Hotarus',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://r6d636w47ncnaukrpvlhmtdbvbeltc6enfcuuow3jclpmyga7cz374qd.onion/',
		},
		{
			id: uuidv5(
				'https://3nvzqyo6l4wkrzumzu5aod7zbosq4ipgf7ifgj3hsvbcr5vcasordvqd.onion/',
				uuidv5.URL
			),
			name: 'Karma Leaks',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'https://3nvzqyo6l4wkrzumzu5aod7zbosq4ipgf7ifgj3hsvbcr5vcasordvqd.onion/',
		},
		{
			id: uuidv5('http://lockbitkodidilol.onion/', uuidv5.URL),
			name: 'LockBit',
			description: '',
			onionVersion: 'v2',
			status: 'active',
			avatar: '',
			uri: 'http://lockbitkodidilol.onion/',
		},
		{
			id: uuidv5(
				'http://xembshruusobgbvxg4tcjs3jpdnks6xrr6nbokfxadcnlc53yxir22ad.onion/',
				uuidv5.URL
			),
			name: 'MBC',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://xembshruusobgbvxg4tcjs3jpdnks6xrr6nbokfxadcnlc53yxir22ad.onion/',
		},
		{
			id: uuidv5('http://mountnewsokhwilx.onion/', uuidv5.URL),
			name: 'Mount Locker',
			description: '',
			onionVersion: 'v2',
			status: 'active',
			avatar: '',
			uri: 'http://mountnewsokhwilx.onion/',
		},
		{
			id: uuidv5(
				'http://nbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patskdoyihra4wthvlgyeyd.onion/',
				uuidv5.URL
			),
			name: 'N3tw0rm',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://nbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patskdoyihra4wthvlgyeyd.onion/',
		},
		{
			id: uuidv5('http://hxt254aygrsziejn.onion/', uuidv5.URL),
			name: 'Nefilim',
			description: '',
			onionVersion: 'v2',
			status: 'active',
			avatar: '',
			uri: 'http://hxt254aygrsziejn.onion/',
		},
		{
			id: uuidv5(
				'http://vbmisqjshn4yblehk2vbnil53tlqklxsdaztgphcilto3vdj4geao5qd.onion/',
				uuidv5.URL
			),
			name: 'Payload.bin',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://vbmisqjshn4yblehk2vbnil53tlqklxsdaztgphcilto3vdj4geao5qd.onion/',
		},
		{
			id: uuidv5('http://promethw27cbrcot.onion/blog/', uuidv5.URL),
			name: 'Prometheus',
			description: '',
			onionVersion: 'v2',
			status: 'active',
			avatar: '',
			uri: 'http://promethw27cbrcot.onion/blog/',
		},
		{
			id: uuidv5(
				'http://pysa2bitc5ldeyfak4seeruqymqs4sj5wt5qkcq7aoyg4h2acqieywad.onion/partners.html',
				uuidv5.URL
			),
			name: 'Pysa',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://pysa2bitc5ldeyfak4seeruqymqs4sj5wt5qkcq7aoyg4h2acqieywad.onion/partners.html',
		},
		{
			id: uuidv5(
				'http://wobpitin77vdsdiswr4bc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patad.onion/',
				uuidv5.URL
			),
			name: 'RAGNAROK',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://wobpitin77vdsdiswr4bc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patad.onion/',
		},
		{
			id: uuidv5(
				'http://37rckgo66iydpvgpwve7b2el5q2zhjw4tv4lmyewufnpx4lhkekxkoqd.onion/',
				uuidv5.URL
			),
			name: 'Ranzy/AKO',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://37rckgo66iydpvgpwve7b2el5q2zhjw4tv4lmyewufnpx4lhkekxkoqd.onion/',
		},
		{
			id: uuidv5(
				'http://gamol6n6p2p4c3ad7gxmx3ur7wwdwlywebo2azv3vv5qlmjmole2zbyd.onion/',
				uuidv5.URL
			),
			name: 'Rook',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://gamol6n6p2p4c3ad7gxmx3ur7wwdwlywebo2azv3vv5qlmjmole2zbyd.onion/',
		},
		{
			id: uuidv5('http://nbzzb6sa6xuura2z.onion/', uuidv5.URL),
			name: 'Suncrypt',
			description: '',
			onionVersion: 'v2',
			status: 'active',
			avatar: '',
			uri: 'http://nbzzb6sa6xuura2z.onion/',
		},
		{
			id: uuidv5(
				'http://spookuhvfyxzph54ikjfwf2mwmxt572krpom7reyayrmxbkizbvkpaid.onion/blog',
				uuidv5.URL
			),
			name: 'Spook',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://spookuhvfyxzph54ikjfwf2mwmxt572krpom7reyayrmxbkizbvkpaid.onion/blog',
		},
		{
			id: uuidv5(
				'http://xqkz2rmrqkeqf6sjbrb47jfwnqxcd4o2zvaxxzrpbh2piknms37rw2ad.onion/',
				uuidv5.URL
			),
			name: 'SynACK',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://xqkz2rmrqkeqf6sjbrb47jfwnqxcd4o2zvaxxzrpbh2piknms37rw2ad.onion/',
		},
		{
			id: uuidv5(
				'http://xingnewj6m4qytljhfwemngm7r7rogrindbq7wrfeepejgxc3bwci7qd.onion/',
				uuidv5.URL
			),
			name: 'XING Team',
			description: '',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://xingnewj6m4qytljhfwemngm7r7rogrindbq7wrfeepejgxc3bwci7qd.onion/',
		},
	]

	res.status(200).json(groups.sort((a, b) => a.name.localeCompare(b.name)))
}
