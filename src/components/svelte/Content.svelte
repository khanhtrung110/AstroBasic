<script>
    import axios from 'axios';
    import { countNumber } from '../../store/user';
    import { addColor, colors } from '../../store/color';
    import { get } from '../../pages/api/products/buildwith.json.ts';
	let count = 0;
    let title = "";
	async function handleClick() {
		count += 1;
        const response = await fetch('/api/products/1.json').then(res => res.json());
        title = response.name;
        axios.get('/api/products/buildwith.json').then(res => console.log(res.data))
        let response2 = await get(Astro)
        const data = await response2.json();
        countNumber.set(++$countNumber);
        addColor('blue', '#a0c4ff');
        console.log('countNumber', $countNumber);
    }
</script>
{#if title}
	 <h2>{title}</h2>
{/if}

<button on:click={handleClick}>
	Clicked {$countNumber}
	{$countNumber === 1 ? 'time' : 'times'}
</button>
