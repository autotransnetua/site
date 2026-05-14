export const MessageIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<g id='Chat_1' data-name='Chat 1'>
					<path d='M3.316,19.937A1.251,1.251,0,0,1,2.065,18.69l0-1.716L2.068,6.56a2.5,2.5,0,0,1,2.5-2.5H19.44a2.5,2.5,0,0,1,2.5,2.5v8.41a2.5,2.5,0,0,1-2.5,2.5H6.918a1.49,1.49,0,0,0-1.06.439L4.2,19.57A1.246,1.246,0,0,1,3.316,19.937ZM4.568,5.062a1.5,1.5,0,0,0-1.5,1.5L3.06,16.973l0,1.714a.25.25,0,0,0,.427.176L5.151,17.2a2.482,2.482,0,0,1,1.767-.732H19.44a1.5,1.5,0,0,0,1.5-1.5V6.562a1.5,1.5,0,0,0-1.5-1.5Z'></path>
				</g>
			</g>
		</svg>
	)
}

export const PhoneIcon = ({ className, stroke }: { className?: string; stroke?: string }) => {
	return (
		<svg
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<path
					d='M20.9995 19.1864V16.4767C21.0105 16.0337 20.858 15.6021 20.5709 15.264C19.7615 14.3106 16.9855 13.7008 15.8851 13.935C15.0274 14.1176 14.4272 14.9788 13.8405 15.5644C11.5747 14.2785 9.69864 12.4062 8.41026 10.1448C8.99696 9.55929 9.85994 8.96036 10.0429 8.10428C10.2772 7.00777 9.66819 4.24949 8.72138 3.43684C8.38835 3.151 7.96253 2.99577 7.52331 3.00009H4.80817C3.77364 3.00106 2.91294 3.92895 3.00713 4.96919C3.00006 13.935 10.0001 21 19.0265 20.9929C20.0723 21.0873 21.0037 20.2223 20.9995 19.1864Z'
					stroke={stroke || 'currentColor'}
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				></path>
			</g>
		</svg>
	)
}

export const PriceIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<g id='Dollar'>
					<g>
						<path d='M12,21.934A9.934,9.934,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.934ZM12,3.066A8.934,8.934,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.066Z'></path>
						<path d='M14.5,13.5a2.006,2.006,0,0,1-2,2v1.01a.5.5,0,0,1-1,0V15.5H10.25a.5.5,0,0,1,0-1H12.5a1,1,0,0,0,0-2h-1a2,2,0,0,1,0-4V7.49a.5.5,0,0,1,1,0V8.5h1.25a.5.5,0,0,1,0,1H11.5a1,1,0,0,0,0,2h1A2.006,2.006,0,0,1,14.5,13.5Z'></path>
					</g>
				</g>
			</g>
		</svg>
	)
}

export const MapPinIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<g id='Map'>
					<path d='M20.21,4.576a1.906,1.906,0,0,0-1.63-.35l-3.53.89a1.086,1.086,0,0,1-.44,0L9.63,3.876a2.041,2.041,0,0,0-.92,0L4.5,4.936a1.893,1.893,0,0,0-1.44,1.84v11.15a1.871,1.871,0,0,0,.73,1.5,1.906,1.906,0,0,0,1.63.35l3.53-.89a1.086,1.086,0,0,1,.44,0l4.98,1.24a2.315,2.315,0,0,0,.46.05,2.4,2.4,0,0,0,.46-.05l4.21-1.06a1.893,1.893,0,0,0,1.44-1.84V6.076A1.871,1.871,0,0,0,20.21,4.576ZM8.67,17.926l-3.49.87a.89.89,0,0,1-1.12-.87V6.776a.9.9,0,0,1,.68-.87l3.93-.99Zm5.66,1.16-4.66-1.16V4.916l4.66,1.16Zm5.61-1.86a.9.9,0,0,1-.68.87l-3.93.99V6.076l3.49-.87a.908.908,0,0,1,.78.16.886.886,0,0,1,.34.71Z'></path>
				</g>
			</g>
		</svg>
	)
}

export const WalletIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<g id='Wallet'>
					<g>
						<path d='M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm1.5,9.93h-6.42a2,2,0,0,1,0-4h6.42Zm-6.42-5a3,3,0,0,0,0,6h6.42v2.44a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V6.565a1.5,1.5,0,0,1,1.5-1.5h14.87a1.5,1.5,0,0,1,1.5,1.5v2.43Z'></path>
						<circle cx='14.519' cy='11.996' r='1'></circle>
					</g>
				</g>
			</g>
		</svg>
	)
}

export const LocaleIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<g id='Location_On' data-name='Location On'>
					<g>
						{' '}
						<path d='M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z'></path>{' '}
						<path d='M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z'></path>{' '}
					</g>{' '}
				</g>{' '}
			</g>
		</svg>
	)
}

export const DiscountIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			className={className}
			fill={fill || 'currentColor'}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<g id='Discount_1'>
					<path d='M21.953,12c0,0.591 -0.346,1.124 -0.839,1.61c-0.295,0.29 -0.639,0.568 -0.942,0.85c-0.242,0.225 -0.46,0.446 -0.562,0.692c-0.107,0.257 -0.114,0.576 -0.105,0.913c0.011,0.416 0.056,0.855 0.059,1.265c0.006,0.691 -0.123,1.304 -0.526,1.708c-0.404,0.403 -1.017,0.532 -1.708,0.526c-0.41,-0.004 -0.849,-0.048 -1.264,-0.059c-0.337,-0.009 -0.657,-0.002 -0.914,0.105c-0.246,0.102 -0.467,0.32 -0.692,0.562c-0.282,0.303 -0.56,0.647 -0.85,0.941c-0.486,0.494 -1.019,0.84 -1.61,0.84c-0.591,-0 -1.124,-0.346 -1.61,-0.84c-0.29,-0.294 -0.568,-0.638 -0.85,-0.941c-0.225,-0.242 -0.447,-0.46 -0.692,-0.562c-0.257,-0.107 -0.577,-0.114 -0.913,-0.105c-0.416,0.011 -0.855,0.055 -1.265,0.059c-0.691,0.006 -1.305,-0.123 -1.708,-0.526c-0.404,-0.404 -0.532,-1.017 -0.526,-1.708c0.003,-0.41 0.048,-0.849 0.059,-1.265c0.009,-0.337 0.002,-0.656 -0.105,-0.914c-0.102,-0.245 -0.32,-0.466 -0.562,-0.691c-0.302,-0.282 -0.646,-0.56 -0.941,-0.85c-0.493,-0.486 -0.84,-1.019 -0.84,-1.61c0,-0.591 0.347,-1.124 0.84,-1.61c0.295,-0.29 0.639,-0.568 0.941,-0.85c0.242,-0.225 0.46,-0.446 0.562,-0.691c0.107,-0.258 0.114,-0.577 0.105,-0.914c-0.011,-0.416 -0.056,-0.855 -0.059,-1.265c-0.006,-0.691 0.122,-1.304 0.526,-1.708c0.403,-0.403 1.017,-0.532 1.708,-0.526c0.41,0.004 0.849,0.048 1.265,0.059c0.336,0.009 0.656,0.002 0.913,-0.105c0.245,-0.102 0.467,-0.32 0.692,-0.562c0.282,-0.303 0.56,-0.647 0.85,-0.941c0.486,-0.494 1.019,-0.84 1.61,-0.84c0.591,0 1.124,0.346 1.61,0.84c0.29,0.294 0.568,0.638 0.85,0.941c0.225,0.242 0.446,0.46 0.692,0.562c0.257,0.107 0.577,0.114 0.914,0.105c0.415,-0.011 0.854,-0.055 1.264,-0.059c0.691,-0.006 1.304,0.123 1.708,0.526c0.403,0.404 0.532,1.017 0.526,1.708c-0.003,0.41 -0.048,0.849 -0.059,1.265c-0.009,0.337 -0.002,0.656 0.105,0.913c0.102,0.246 0.32,0.467 0.562,0.692c0.303,0.282 0.647,0.56 0.942,0.85c0.493,0.486 0.839,1.019 0.839,1.61Zm-1,0c0,-0.188 -0.088,-0.355 -0.206,-0.518c-0.164,-0.226 -0.388,-0.437 -0.622,-0.646c-0.583,-0.521 -1.205,-1.04 -1.439,-1.604c-0.242,-0.585 -0.177,-1.399 -0.136,-2.178c0.017,-0.315 0.027,-0.622 -0.015,-0.895c-0.029,-0.191 -0.08,-0.365 -0.204,-0.489c-0.125,-0.125 -0.299,-0.176 -0.49,-0.205c-0.273,-0.042 -0.58,-0.032 -0.895,-0.015c-0.779,0.041 -1.593,0.106 -2.177,-0.136c-0.565,-0.234 -1.084,-0.855 -1.605,-1.439c-0.209,-0.234 -0.42,-0.458 -0.646,-0.622c-0.163,-0.118 -0.33,-0.206 -0.518,-0.206c-0.187,0 -0.355,0.088 -0.518,0.206c-0.226,0.164 -0.437,0.388 -0.646,0.622c-0.521,0.584 -1.04,1.205 -1.605,1.439c-0.584,0.242 -1.398,0.177 -2.177,0.136c-0.315,-0.017 -0.622,-0.027 -0.895,0.015c-0.192,0.029 -0.365,0.08 -0.49,0.205c-0.125,0.124 -0.175,0.298 -0.204,0.489c-0.042,0.273 -0.032,0.58 -0.016,0.895c0.042,0.779 0.107,1.593 -0.135,2.177c-0.234,0.565 -0.855,1.084 -1.439,1.605c-0.234,0.209 -0.458,0.42 -0.622,0.646c-0.118,0.163 -0.206,0.33 -0.206,0.518c0,0.188 0.088,0.355 0.206,0.518c0.164,0.226 0.388,0.437 0.622,0.646c0.584,0.521 1.205,1.04 1.439,1.605c0.242,0.584 0.177,1.398 0.135,2.177c-0.016,0.315 -0.026,0.622 0.016,0.895c0.029,0.191 0.079,0.365 0.204,0.489c0.125,0.125 0.298,0.176 0.49,0.205c0.273,0.042 0.58,0.032 0.895,0.015c0.779,-0.041 1.593,-0.106 2.177,0.136c0.565,0.234 1.084,0.855 1.605,1.439c0.209,0.234 0.42,0.458 0.646,0.622c0.163,0.118 0.331,0.206 0.518,0.206c0.188,-0 0.355,-0.088 0.518,-0.206c0.226,-0.164 0.437,-0.388 0.646,-0.622c0.521,-0.584 1.04,-1.205 1.605,-1.439c0.584,-0.242 1.398,-0.177 2.177,-0.136c0.315,0.017 0.622,0.027 0.895,-0.015c0.191,-0.029 0.365,-0.08 0.49,-0.205c0.124,-0.124 0.175,-0.298 0.204,-0.489c0.042,-0.273 0.032,-0.58 0.015,-0.895c-0.041,-0.779 -0.106,-1.593 0.136,-2.178c0.234,-0.564 0.856,-1.083 1.439,-1.604c0.234,-0.209 0.458,-0.42 0.622,-0.646c0.118,-0.163 0.206,-0.33 0.206,-0.518Zm-10.531,-1.762c-0.396,0.396 -1.039,0.396 -1.435,-0c-0.396,-0.396 -0.396,-1.04 -0,-1.436c0.396,-0.396 1.039,-0.396 1.435,0c0.396,0.396 0.396,1.04 0,1.436Zm4.471,-1.838c0.195,-0.195 0.512,-0.195 0.707,0c0.195,0.195 0.195,0.512 -0,0.707l-6.493,6.493c-0.195,0.195 -0.512,0.195 -0.707,0c-0.195,-0.195 -0.195,-0.512 -0,-0.707l6.493,-6.493Zm-1.315,5.363c0.396,-0.396 1.039,-0.396 1.435,0c0.396,0.396 0.396,1.04 0,1.436c-0.396,0.396 -1.039,0.396 -1.435,-0c-0.397,-0.396 -0.397,-1.04 -0,-1.436Z'></path>{' '}
				</g>{' '}
			</g>
		</svg>
	)
}

export const PeopleIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<g id='User'>
					{' '}
					<g>
						{' '}
						<path d='M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z'></path>{' '}
						<path d='M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z'></path>{' '}
					</g>{' '}
				</g>{' '}
			</g>
		</svg>
	)
}

export const ClockIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<g id='Alarm_On' data-name='Alarm On'>
					{' '}
					<g>
						{' '}
						<path d='M20.352,8.213a2.017,2.017,0,0,0,0-2.851L18.9,3.9a2.038,2.038,0,0,0-2.86,0l-.67.659A8.238,8.238,0,0,0,12,3.852a8.332,8.332,0,0,0-3.39.71L7.962,3.9a2.038,2.038,0,0,0-2.86,0L3.652,5.362a2.02,2.02,0,0,0-.01,2.851l.65.67a8.419,8.419,0,1,0,16.13,3.39,8.4,8.4,0,0,0-.72-3.411ZM4.362,6.062l1.45-1.45a1.016,1.016,0,0,1,1.44,0l.44.43a8.427,8.427,0,0,0-2.91,2.9l-.42-.43A1.027,1.027,0,0,1,4.362,6.062ZM12,19.682a7.415,7.415,0,1,1,7.42-7.409A7.421,7.421,0,0,1,12,19.682Zm7.22-11.75a8.578,8.578,0,0,0-2.91-2.89l.44-.43a1.016,1.016,0,0,1,1.44,0l1.45,1.45a1.027,1.027,0,0,1,0,1.451Z'></path>{' '}
						<path d='M17.042,12.763H12a.455.455,0,0,1-.27-.081c-.03-.02-.05-.039-.07-.049a.442.442,0,0,1-.16-.36V7.232a.5.5,0,0,1,1,0v4.531h4.54A.5.5,0,0,1,17.042,12.763Z'></path>{' '}
					</g>{' '}
				</g>{' '}
			</g>
		</svg>
	)
}

export const CheckIcon = ({ className, stroke }: { className?: string; stroke?: string }) => {
	return (
		<svg
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<path
					d='M17.0001 9L10 16L7 13'
					stroke={stroke || 'currentColor'}
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				></path>
			</g>
		</svg>
	)
}

export const ListIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<g id='File_On' data-name='File On'>
					<path d='M19.485,7.35l-4.97-4.86a1.466,1.466,0,0,0-1.05-.43h-6.9a2.5,2.5,0,0,0-2.5,2.5V19.44a2.507,2.507,0,0,0,2.5,2.5h10.87a2.507,2.507,0,0,0,2.5-2.5V8.42A1.49,1.49,0,0,0,19.485,7.35Zm-1.27.15h-2.34a1.5,1.5,0,0,1-1.5-1.5V3.75Zm.72,11.94a1.5,1.5,0,0,1-1.5,1.5H6.565a1.5,1.5,0,0,1-1.5-1.5V4.56a1.5,1.5,0,0,1,1.5-1.5h6.81V6a2.5,2.5,0,0,0,2.5,2.5h3.06Z'></path>
				</g>
			</g>
		</svg>
	)
}

export const CalendarIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<g id='Calendar'>
					<path d='M18.438,4.954H16.5c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372c0-0.262-0.23-0.512-0.5-0.5 c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408h-7c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372 c0-0.262-0.23-0.512-0.5-0.5c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408H5.562c-1.378,0-2.5,1.122-2.5,2.5v11 c0,1.379,1.122,2.5,2.5,2.5h12.875c1.379,0,2.5-1.121,2.5-2.5v-11C20.938,6.076,19.816,4.954,18.438,4.954z M5.562,5.954H7.5 c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5c0-0.197,0-0.394,0-0.592 h7c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5 c0-0.197,0-0.394,0-0.592h1.937c0.827,0,1.5,0.673,1.5,1.5v1.584H4.062V7.454C4.062,6.627,4.735,5.954,5.562,5.954z M18.438,19.954 H5.562c-0.827,0-1.5-0.673-1.5-1.5v-8.416h15.875v8.416C19.938,19.281,19.265,19.954,18.438,19.954z'></path>
				</g>
			</g>
		</svg>
	)
}

export const CarIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<g id='Delivery_Truck' data-name='Delivery Truck'>
					<g>
						<path d='M21.47,11.185l-1.03-1.43a2.5,2.5,0,0,0-2.03-1.05H14.03V6.565a2.5,2.5,0,0,0-2.5-2.5H4.56a2.507,2.507,0,0,0-2.5,2.5v9.94a1.5,1.5,0,0,0,1.5,1.5H4.78a2.242,2.242,0,0,0,4.44,0h5.56a2.242,2.242,0,0,0,4.44,0h1.22a1.5,1.5,0,0,0,1.5-1.5v-3.87A2.508,2.508,0,0,0,21.47,11.185ZM7,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,7,18.935Zm6.03-1.93H9.15a2.257,2.257,0,0,0-4.3,0H3.56a.5.5,0,0,1-.5-.5V6.565a1.5,1.5,0,0,1,1.5-1.5h6.97a1.5,1.5,0,0,1,1.5,1.5ZM17,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,17,18.935Zm3.94-2.43a.5.5,0,0,1-.5.5H19.15a2.257,2.257,0,0,0-4.3,0h-.82v-7.3h4.38a1.516,1.516,0,0,1,1.22.63l1.03,1.43a1.527,1.527,0,0,1,.28.87Z'></path>
						<path d='M18.029,12.205h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z'></path>
					</g>
				</g>
			</g>
		</svg>
	)
}

export const CheckRoundIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<g id='Circle_Check' data-name='Circle Check'>
					<g>
						<path d='M15.81,10.4a.5.5,0,0,0-.71-.71l-3.56,3.56L9.81,11.52a.5.5,0,0,0-.71.71l2.08,2.08a.513.513,0,0,0,.71,0Z'></path>
						<path d='M12,21.934A9.934,9.934,0,1,1,21.933,12,9.945,9.945,0,0,1,12,21.934ZM12,3.067A8.934,8.934,0,1,0,20.933,12,8.944,8.944,0,0,0,12,3.067Z'></path>
					</g>
				</g>
			</g>
		</svg>
	)
}

export const PiggyBankIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<path d='M3.08600868,13.9658813 C1.90231209,13.7686189 1,12.7396826 1,11.5 L1,10.5 C1,10.2238576 1.22385763,10 1.5,10 C1.77614237,10 2,10.2238576 2,10.5 L2,11.5 C2,12.1555135 2.42048233,12.712818 3.00644016,12.9169068 C3.00214648,12.7799061 3,12.6409345 3,12.5 C3,8.98310528 6.61112745,6 12.5,6 C13.8841001,6 15.1092766,6.13286706 16.1760594,6.40065509 C16.6402456,4.99397914 17.9653135,4 19.5,4 C19.7761424,4 20,4.22385763 20,4.5 L20,8.63508295 C20.3375772,9.04428157 20.6164404,9.49966803 20.8362579,10 L22.5,10 C22.7761424,10 23,10.2238576 23,10.5 L23,14.5 C23,14.7761424 22.7761424,15 22.5,15 L20.954897,15 C20.7828847,15.9489632 20.120703,16.8623964 19,17.7462284 L19,21.5 C19,21.7761424 18.7761424,22 18.5,22 L15.5,22 C15.2238576,22 15,21.7761424 15,21.5 L15,20 L10,20 L10,21.5 C10,21.7761424 9.77614237,22 9.5,22 L6.5,22 C6.22385763,22 6,21.7761424 6,21.5 L6,18.7999366 C4.33696817,17.856727 3.3670278,16.23049 3.08600868,13.9658813 L3.08600868,13.9658813 Z M17.031813,7.09962337 C16.9836356,7.39939938 16.6815799,7.58739596 16.3913399,7.49824769 C15.3134154,7.16715939 14.0160242,7 12.5,7 C7.12571466,7 4,9.58211211 4,12.5 C4,15.3250259 4.91063808,17.146302 6.7236068,18.0527864 C6.89299881,18.1374824 7,18.310614 7,18.5 L7,21 L9,21 L9,19.5 C9,19.2238576 9.22385763,19 9.5,19 L15.5,19 C15.7761424,19 16,19.2238576 16,19.5 L16,21 L18,21 L18,17.5 C18,17.3426213 18.0740971,17.1944272 18.2,17.1 C19.419755,16.1851838 20,15.3148162 20,14.5 C20,14.2238576 20.2238576,14 20.5,14 L22,14 L22,11 L20.5,11 C20.2915777,11 20.1050174,10.8707136 20.0318354,10.6755617 C19.8144808,10.0959495 19.512593,9.58860545 19.1253859,9.15058459 C19.044594,9.05919019 19,8.94141333 19,8.8194286 L19,5.05021249 C17.9951704,5.25475923 17.1982812,6.06380033 17.031813,7.09962337 Z M10,4.5 C10,4.77614237 9.77614237,5 9.5,5 C9.22385763,5 9,4.77614237 9,4.5 C9,3.11928813 10.1192881,2 11.5,2 L11.5247823,2 C12.9055801,2 14.0249378,3.11935773 14.0249378,4.50015547 C14.0249378,4.77629784 13.8010802,5.00015547 13.5249378,5.00015547 C13.2487954,5.00015547 13.0249378,4.77629784 13.0249378,4.50015547 C13.0249378,3.67164248 12.3532953,3 11.5247823,3 L11.5,3 C10.6715729,3 10,3.67157288 10,4.5 Z M17,12 C16.4477153,12 16,11.5522847 16,11 C16,10.4477153 16.4477153,10 17,10 C17.5522847,10 18,10.4477153 18,11 C18,11.5522847 17.5522847,12 17,12 Z'></path>
			</g>
		</svg>
	)
}

export const LockIcon = ({ className, stroke }: { className?: string; stroke?: string }) => {
	return (
		<svg
			className={className}
			width='32'
			height='32'
			viewBox='-0.5 0 25 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<path
					d='M16.5 9.32001H7.5C6.37366 9.25709 5.26818 9.64244 4.42503 10.3919C3.58188 11.1414 3.06958 12.1941 3 13.32V18.32C3.06958 19.446 3.58188 20.4986 4.42503 21.2481C5.26818 21.9976 6.37366 22.3829 7.5 22.32H16.5C17.6263 22.3829 18.7318 21.9976 19.575 21.2481C20.4181 20.4986 20.9304 19.446 21 18.32V13.32C20.9304 12.1941 20.4181 11.1414 19.575 10.3919C18.7318 9.64244 17.6263 9.25709 16.5 9.32001Z'
					stroke={stroke || 'currentColor'}
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				></path>
				<path
					d='M17 9.32001V7.32001C17 5.99392 16.4732 4.72217 15.5355 3.78448C14.5979 2.8468 13.3261 2.32001 12 2.32001C10.6739 2.32001 9.40214 2.8468 8.46446 3.78448C7.52678 4.72217 7 5.99392 7 7.32001V9.32001'
					stroke={stroke || 'currentColor'}
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				></path>
			</g>
		</svg>
	)
}

export const QuoteIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			width='100px'
			height='100px'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<path
					d='M15.9082 12.3714H20.5982C20.5182 17.0414 19.5982 17.8114 16.7282 19.5114C16.3982 19.7114 16.2882 20.1314 16.4882 20.4714C16.6882 20.8014 17.1082 20.9114 17.4482 20.7114C20.8282 18.7114 22.0082 17.4914 22.0082 11.6714V6.28141C22.0082 4.57141 20.6182 3.19141 18.9182 3.19141H15.9182C14.1582 3.19141 12.8282 4.52141 12.8282 6.28141V9.28141C12.8182 11.0414 14.1482 12.3714 15.9082 12.3714Z'
					fill='#010d1db7'
				></path>
				<path
					d='M5.09 12.3714H9.78C9.7 17.0414 8.78 17.8114 5.91 19.5114C5.58 19.7114 5.47 20.1314 5.67 20.4714C5.87 20.8014 6.29 20.9114 6.63 20.7114C10.01 18.7114 11.19 17.4914 11.19 11.6714V6.28141C11.19 4.57141 9.8 3.19141 8.1 3.19141H5.1C3.33 3.19141 2 4.52141 2 6.28141V9.28141C2 11.0414 3.33 12.3714 5.09 12.3714Z'
					fill='#010d1db7'
				></path>
			</g>
		</svg>
	)
}

export const FlyIcon = ({ className, fill }: { className?: string; fill?: string }) => {
	return (
		<svg
			fill={fill || 'currentColor'}
			className={className}
			width='32'
			height='32'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<g id='Paper_Plane' data-name='Paper Plane'>
					{' '}
					<path d='M21.061,11.077,3.741,4.157a.994.994,0,0,0-1.17.32,1,1,0,0,0-.01,1.22l4.49,6a.525.525,0,0,1-.01.62L2.511,18.3a1.02,1.02,0,0,0,0,1.22,1,1,0,0,0,.8.4,1.021,1.021,0,0,0,.38-.07l17.36-6.9a1.006,1.006,0,0,0,.01-1.87ZM3.371,5.087l16.06,6.42H8.061a1.329,1.329,0,0,0-.21-.41Zm-.06,13.82,4.53-5.98a1.212,1.212,0,0,0,.22-.42h11.38Z'></path>{' '}
				</g>{' '}
			</g>
		</svg>
	)
}

export const HambMenuIcon = ({ className, stroke }: { className?: string; stroke?: string }) => {
	return (
		<svg
			className={className}
			width='32'
			height='32'
			viewBox='-0.5 0 25 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<path
					d='M2 12.32H22'
					stroke={stroke || 'currentColor'}
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				></path>{' '}
				<path
					d='M2 18.32H22'
					stroke={stroke || 'currentColor'}
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				></path>{' '}
				<path
					d='M2 6.32001H22'
					stroke={stroke || 'currentColor'}
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				></path>{' '}
			</g>
		</svg>
	)
}
