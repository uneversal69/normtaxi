import React from "react";

const BackBtn = () => {
  return (
    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_d_136_94)">
<rect x="11" y="11" width="48" height="48" rx="24" fill="white"/>
</g>
<path d="M23 46.68H47V22.68H23V46.68Z" fill="url(#pattern0)"/>
<defs>
<filter id="filter0_d_136_94" x="-1" y="-1" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_136_94"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_136_94" result="shape"/>
</filter>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_136_94" transform="scale(0.015625)"/>
</pattern>
<image id="image0_136_94" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAKVElEQVR4Ad2aBXTrSrJFd3W3bDnOZWYcZmZmZmZa+JmZmZmZmfkPMzPjY7qPgragq75ieY2djAPvJ/F4sr1OZMq9OUfd1dVLEtbhuV//Y00n3AVxjxKRB1a6iMiUIAaA8NXHAEzMLKt0eaX3YvYmM/sQsMAq/M2vfl8QYzTP/4YfSwV5sXj/Sh/CPbxPdjvnwTlqBBG+yghgmA0lYYrFSIxlVumjGuNfY/r7wK2MQCqjI96V+znvfyokzUcnjRSfJCABcZ6kEUj80nNhYjAwjLKMFEWJxhIsomVOkWeUefa+KowfBP6TFQREVniX5/vQ+OVma+poo9lCQoOkmbJvd5vjB/dyaF+bNEnACROFGXkRuWlmgWtunKmOc2SdLkkzp8g698u6nb+rgvh+4BcYIog4hnhedcb/MJ1qTyVpG5ekHNy/hzufPcLRA7tptxp45wAwJguh5syxA9yxm3PDLfN86rLrufbSLbjQwPtkquvmf77Iuh742aEApB+g3SdpNH87be+aaramCc0W504c4m4XjrKn3SKakZeKmQ4NGmHC5gEIJCFw+sg+Duxp86nLb+Azl11H7jziHJj8ZJ53Pg/8I0Cw2v20T6phPzW9rznVJqRtLp48xN0r8yEJLOQFIMiwaZnAcVCboQAMIwTPXc8fIXjHJ790HeJATb1a/NlYZO8Erg+CIc4/p9FMH9JstfGNKY4f2sftTx9EgcVugYjwtUhhEe+Ec8f3sZgVfPEqpRkVLcoLnRi/FfiOIOL2+JB801LBC42UXdNtzh7bC8BiViIAywIwJh8BAzByIDg4eXh3VRg73BpLGq2cssheVOTdnw3i3F2TRuMejTTFJ43evEkbnk5eYgg7gdyM4F1VyKdZ6HTQsklV706WZf6kIM4/IDSa4kOTNE3ZM93sFbtogrAzMMALtNKEtNmkzJpUnnFZ5ynBOf9g7xOcCzSTBBGhmyvGzkIAM6PZSFj0gcpzpXAhOOcuOh8Q73FOKEpFLWLsQPpTwXlfy/ndQZxrOe965gHyqDgF284zIYKaAIbDkDGVVkExQEQQ7xAnIQhiGD20306K2DaadxRlQchn8M5TNnczLgRDVRFADAQh1K+kzsegKA1Et9w4AtEcZb7I8bTDA+92hK4G3vL5eboRvIwngKh9v30FMwDrSdXIoyHClgdQLpnP5rnDvpLH3f/OHDl2kpmFDm/5wsfo5iWN4MZSA2I0zCpBTwEMrJapUUZFRLbUfKEC+Qz3OuZ53IPuxe59BwEoipLY/z+dMJ4AVAHDTOuiCHUioJhVUoWtCkCELEIoZnnw+TaPesA9SNu7GcZU+xpLALVxtH6OEUzrAOpA6udbVemzXJmyOR595wM8+L53xzdarMTM6GtMARh9z6BGYBtQlsxH9rl5nnCvE9z7HncFF5hEQp3IYPhvdgoojizPOJ52efL9z3PHO94REEZiYGrjnQKqA325BgA2eGyq0hd5h/O7C576oDtx+ux51mLw/+qYNl7LHdY1wAxW6P9DoUKZL3DXQ/Dkh96Tw0dPsBHUrBI9bQWyVpQjvA4VwYEQNo5AEYFigfufavLEh9bL3EaIZUnRWaRYzJDEsxWIC4QkGW1h2Gf/eVhWibmN1VggL4wkLvDQ2+3lMQ++V73MbZB2K+Fht9/L7PwC3jk2g4hgWnLdTM5lc4oiyKgA+lKM/hRQqGRDAmFd+stcm0Uec/cjPPT+9yQ0WtwWdk1P85iH3R9Mt2q/yxVX38Afvf6TzHZLEu9G9gGGgipYvwas1JoImC2ZL9gfujzpvme4373uvollTkA8W4LArt178N4TY0FwwjKWjXT6q4CBsbEABFATunnOiamCpz3o9tz5zncGhEmhjBFVHe3FbLD0mg21wnUAa04BEaFUyPMuF/fB0x96N86ev8AkMvAiIwIY9qn9GqDrL4NqEIucux/1PO1h9+TI8ZNMJMbqXmrzQ0FAWN4EMboRMuiWkXuc2sPzHnEX9uw/xORiw481PxtshnT9PqAsCo4dPlSbn3CG+5rRm6HBdxz0C0bvOFqgJF5432eu5ovX3MSEs6YX6/utMRwGmK0pUyMJjku3zPG7//JuPvr5a5hodA0/amCDPsDVaRhm60iNZuK5dW6RP/yP9/L2j35xwmugrSqGnrvBm2Bm66rVTHpN0F/8zwf493d+ArOJrAHrC+sHsGzdtHWlqr2RIMA/veWj/OX/foCsKJkUppoNRMAsbiAECIN9gG14L2AGSRAEz+vf92lmFxZ58ePvx+52ym3BDOY7GTEqImx+M2TGZdfeTKeb4wTMdGQfMKzAiGQ2+sd7L1XiCe/5xGXMLWa84kkP4PD+XWyQXnC/9y/v4sZb52kkYZMBgBksdDOyvCQ495VeVvpUI5iN7p42GoITmE6bfPKL1/Ib//BWXvHkB3Lu+AE2QjfLe/fw3DCzQJokW1D+BO8cSRiYH90KGxg9gqHrbIY2xnQr4Yprb+I3//4tvOzJD+BuF06wHgI0Ek+ahF5d2SpW9TBiJXB1Krp5YbTThJtuneN3/vFtvOMjX2BDmI5fGIb2FAYVcXMjAAOob0LodDP++N/fycz8Ik9+yN1Yizr/8V4XGJ4K4cuvMfrPN03aSHpL49++/v29xul5j70vSfCrB1Br+7HhJgmw4WuD0SAMlsHN3q7XCB4B/vOdH2NmvsNLq+K4ayodOQWs1tgujQ1fHQpg1IL+8y0rRMELU2lS1YPPMrfQ4VVPfyiH9u1iOTbQtmMrNWiFFUXr51sqJ0I7bfKRz13Jr/zV67nsmhuXNS8AqobZmEV9dMsujqpti6S3TDb54lWX+NUqhA9/9goA0rRJEQdDctzCjGCArXhsF9NTDS7dOstv/92beNT97oQgzC9268YFY9sZ4TRgJpXGVo5bjXo3+S9v/iDeOZqNgBMZyzJgIy+NmeYrd4NgbCfBO7xLhv4wZSx8RS3Q6MzsSjMd+4IsQk9gjIvhrX8tmw+m9m6N+qRKmNYCx07EzGqPfa+qelUw7J0aI2pLUgTFITs0AO1JK8VYYmqvD4J9TGN5WaWzphFTjyGICDsLq81rpPK6pJvB/jmAXF+l8VtlUfxUCCXifN+822lnvzZelsQyr1T+u/P+Mlf9ANM/ikX2+bLM6y9p7Fdm2xEyFOsP+yWPZZHfYhp/ohLBNAJcXyXyLUWW/ZNz3ok4CII4hyB8bWOo1mc/FgVFvhRA8SPi/KcB/B3u/TB6hkU+axoLMXmMiMBQHRCGEcCYXASwZVVfY6QscvKsS5l3f1tEvq8SSwrOOYb4yaLoesN+MDENZg3699WD9APBABAmCxt+Nmh0avO9M9+lyLq/rapfzxBBVVnBjxVF9iVDf0g1XvQhwfuAeIcgdRDIRCZgI8zHsqDyc13M858Dfn7FCa9HwAj+vErt7Rrjt/iQPNX5cL43EqS/QlSauGFgrDBfEmO8pgrg9arxZ4GPMwIxCEDJKjzjdd99UpDHiXOPF3Hnq+NeEUkmNIBoZjOqcam9f5OZ/TvwBdbg/wAgTPo3Oib1owAAAABJRU5ErkJggg=="/>
</defs>
</svg>

  );
};

export default BackBtn;
