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
			description: 'some description',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://bc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patvdqxucdaxxedumhqicpad.onion/',
		},
		{
			id: uuidv5(
				'http://nq4zyac4ukl4tykmidbzgdlvaboqeqsemkp4t35bzvjeve6zm2lqcjid.onion/',
				uuidv5.URL
			),
			name: 'Babuk',
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://alphvmmm27o3abo3r2mlmjrpdmzlebc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
		},
		{
			id: uuidv5(
				'http://ce6roic2ykdjunyzazsxmjpz5wsar4pflpoqzntyww5c2eskcp7dq4yd.onion/',
				uuidv5.URL
			),
			name: 'BlackByte',
			description: 'some description',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://ce6roic2ykdjunyzazsxmjpz5wsar4pflpoqzntyww5c2eskcp7dq4yd.onion/',
		},
		{
			id: uuidv5(
				'http://bl4cktorpms2gybrcyt52aakcxt6ynbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5pat.onion/',
				uuidv5.URL
			),
			name: 'Bl4ckt0r',
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://continewsnv5otx5kaoje7krkto2qbu3gtqef22mnr7eaxw3y6ncz3ad.onion/',
		},
		{
			id: uuidv5(
				'http://7k4yyskpzbc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patxopmt7tq7eid.onion/',
				uuidv5.URL
			),
			name: 'CRYP70N1C0D3',
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'https://lhxxtrqraokn6bc1qj6gzl9xpe7umpvrzt0f0ekcqf4t5j04kgd5patz7n4kcyd.onion/',
		},
		{
			id: uuidv5('https://kelvinsecteamcyber.wixsite.com/', uuidv5.URL),
			name: 'KelvinSecurity',
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://midasbkic5eyfox4dhnijkzc7v7e4hpmsb2qgux7diqbpna4up4rtdad.onion/',
		},
		{
			id: uuidv5('http://moses-staff.se/', uuidv5.URL),
			name: 'Moses Staff',
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
			onionVersion: 'v3',
			status: 'paused',
			avatar: '',
			uri: 'http://blogxxu75w63ujqarv476otld7cyjkq4yoswzt4ijadkjwvg3vrvd5yd.onion/',
		},
		{
			id: uuidv5(
				'http://hl66646wtlp2naoqnhattngigjp5palgqmbwixepcjyq5i534acgqyad.onion/',
				uuidv5.URL
			),
			name: 'Snatch',
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
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
			description: 'some description',
			onionVersion: 'v3',
			status: 'active',
			avatar: '',
			uri: 'http://jvdamsif53dqjycuozlaye2s47p7xij4x6hzwzwhzrqmv36gkyzohhqd.onion/',
		},
	]

	res.status(200).json(groups.sort((a, b) => a.name.localeCompare(b.name)))
}
