<script lang="ts">
	import Typewriter from 'svelte-typewriter';
</script>

<div class="text-center overflow-hidden">
	<pre
		class="aspect-video inline-block text-left bg-white gradient-text scanlines crt-colors text-[1.6vh]">
    ..............
    *            :                     .................
                 :                     :               :
            _    :      _           _  *       _       :   _
     ______/\\___:_____/\\    _____/\\________/\\______:__/\\_
   ___|__  __/_|_:  ___  /___/\ |____/_|_  __----/_|_  :_----/
   \\_  \ ---\\\\:_|--|--\\\___ |----\\\_ _ \___/\\\_\ :\___/
    \_________\\_:________\\__________\\__________\\___:__\
     ¬¬¬¬¬¬¬¬¬¬ ¬:¬¬¬¬¬¬¬¬¬ ¬¬¬¬¬¬¬¬¬¬¬ ¬¬¬¬¬¬¬¬¬¬¬ ¬¬¬:¬q!x
                 :.............................        :
                            _âµgmµmµµ__       :        :
                         _ø#P"  jÎ  ¬°Ïg_     :        :...........
                        øP"     #QL    ¬¶b_   :                   :
                       ø_______øQQQ_______#_  :...................:
                      øF¬óQQQQQQQQQQQQQQ#P¬Ï
                      Q    °#QQQQQQQQÏP¯   #L
    ...too good,      Q      ÅQQQQQQQL     #L
    to be true...     åL    jQQQ#¶QQQ#    j@
                       ¶L  jQ#P"   °ÏQk  _Ø
                        ¶b_*"        ¬¶LøP
                         ¬9#µ___  ___âøP"
                            ¬°Pó@@@P°¯




                         J   O   K   E   R
    </pre>
</div>

<style>
	.crt-colors {
		animation: 0.01s linear infinite alternate textShadow;
	}

	.scanlines {
		background-image: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
			linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
		background-size:
			100% 3px,
			3px 100%;
	}

	.gradient-text {
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
	}

	@keyframes textShadow {
		0%,
		25% {
			text-shadow:
				2px 0 1px rgba(0, 60, 255, 0.6),
				-2px 0 1px rgba(255, 30, 100, 0.4),
				0 0 3px;
		}
		50% {
			text-shadow:
				1px 0 1px rgba(0, 90, 255, 0.7),
				-1px 0 1px rgba(255, 60, 120, 0.5),
				0 0 3px;
		}
		75% {
			text-shadow:
				3px 0 1px rgba(0, 120, 255, 0.8),
				-3px 0 1px rgba(255, 90, 140, 0.6),
				0 0 3px;
		}
		100% {
			text-shadow:
				0.5px 0 1px rgba(41, 65, 251, 0.5),
				-0.5px 0 1px rgba(255, 0, 230, 0.3),
				0 0 3px;
		}
	}
</style>
