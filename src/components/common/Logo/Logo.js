import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Logo.module.css";

const Logo = ({ className }) => (
  <>
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(styles.condensed, className)}
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c.366 0 .728-.013 1.087-.037C9.72 31.52 3.881 25.406 3.881 17.926c0-7.767 6.296-14.063 14.063-14.063 7.436 0 13.523 5.771 14.028 13.078.018-.311.028-.625.028-.941 0-8.837-7.163-16-16-16"
          fill="#000"
        />
        <path
          d="M25.73 18.719a5.119 5.119 0 0 1-1.737-9.934 11.186 11.186 0 0 0-5.23-1.289c-6.21 0-11.243 5.034-11.243 11.244s5.034 11.244 11.244 11.244S30.008 24.95 30.008 18.74c0-.704-.066-1.393-.19-2.061a5.11 5.11 0 0 1-4.088 2.04"
          fill="#F47521"
        />
      </g>
    </svg>

    <svg
      viewBox="0 0 202 32"
      className={classNames(styles.extended, className)}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c.366 0 .728-.013 1.087-.037C9.72 31.52 3.881 25.406 3.881 17.926c0-7.767 6.296-14.063 14.063-14.063 7.436 0 13.523 5.771 14.028 13.078.018-.311.028-.625.028-.941 0-8.837-7.163-16-16-16"
          fill="#000"
        />
        <path
          d="M25.73 18.719a5.119 5.119 0 0 1-1.737-9.934 11.186 11.186 0 0 0-5.23-1.289c-6.21 0-11.243 5.034-11.243 11.244s5.034 11.244 11.244 11.244S30.008 24.95 30.008 18.74c0-.704-.066-1.393-.19-2.061a5.11 5.11 0 0 1-4.088 2.04"
          fill="#F47521"
        />
        <g fillRule="nonzero">
          <path
            d="M46.652 25.42c1.288 0 2.296-.21 3.024-.63.728-.42 1.092-1.013 1.092-1.778 0-.43-.093-.798-.28-1.106-.187-.308-.467-.593-.84-.854-.317.15-.681.29-1.092.42-.41.13-.896.196-1.456.196-.952 0-1.76-.29-2.422-.868-.663-.579-.994-1.447-.994-2.604 0-.579.093-1.083.28-1.512.187-.43.434-.789.742-1.078.308-.29.672-.509 1.092-.658a3.94 3.94 0 0 1 1.33-.224c.523 0 1.008.07 1.456.21.448.14.83.285 1.148.434.224-.224.42-.49.588-.798.168-.308.252-.64.252-.994 0-.765-.364-1.39-1.092-1.876-.728-.485-1.764-.728-3.108-.728-1.008 0-1.965.15-2.87.448a6.942 6.942 0 0 0-2.394 1.344c-.69.597-1.237 1.358-1.638 2.282-.401.924-.602 2.002-.602 3.234 0 1.064.187 2.035.56 2.912.373.877.9 1.629 1.582 2.254.681.625 1.498 1.11 2.45 1.456.952.345 2.016.518 3.192.518Zm8.628-.196c.43 0 .845-.028 1.246-.084a6.49 6.49 0 0 0 .882-.168v-9.548c.243-.112.537-.21.882-.294.345-.084.714-.163 1.106-.238a13.299 13.299 0 0 1 2.408-.224c.112-.205.205-.434.28-.686.075-.252.112-.509.112-.77 0-.784-.261-1.349-.784-1.694S60.18 11 59.284 11c-.541 0-1.083.042-1.624.126a11.979 11.979 0 0 0-2.982.868 4.948 4.948 0 0 0-1.106.658 2.598 2.598 0 0 0-.686.826c-.159.308-.238.677-.238 1.106v8.4c0 .467.06.845.182 1.134.121.29.294.518.518.686.224.168.5.28.826.336.327.056.695.084 1.106.084Zm15.292.224c1.064 0 2.049-.107 2.954-.322.905-.215 1.685-.527 2.338-.938.784-.467 1.176-1.167 1.176-2.1v-8.512c0-.467-.06-.845-.182-1.134a1.616 1.616 0 0 0-.518-.686c-.224-.168-.5-.28-.826-.336a6.586 6.586 0 0 0-1.106-.084c-.43 0-.845.028-1.246.084a6.49 6.49 0 0 0-.882.168v9.8c-.15.075-.36.15-.63.224-.27.075-.62.112-1.05.112-.71 0-1.25-.163-1.624-.49-.373-.327-.56-.873-.56-1.638v-6.02c0-.467-.06-.845-.182-1.134a1.616 1.616 0 0 0-.518-.686c-.224-.168-.5-.28-.826-.336a6.586 6.586 0 0 0-1.106-.084c-.43 0-.845.028-1.246.084a6.49 6.49 0 0 0-.882.168v8.008c0 1.045.168 1.937.504 2.674.336.737.812 1.34 1.428 1.806.616.467 1.349.812 2.198 1.036.85.224 1.778.336 2.786.336Zm20.136-.224c.43 0 .845-.028 1.246-.084a6.49 6.49 0 0 0 .882-.168v-8.764c0-1.643-.57-2.926-1.708-3.85-1.139-.924-2.763-1.386-4.872-1.386-1.176 0-2.245.14-3.206.42-.961.28-1.76.644-2.394 1.092-.373.261-.667.55-.882.868-.215.317-.322.728-.322 1.232v8.4c0 .467.06.845.182 1.134.121.29.294.518.518.686.224.168.5.28.826.336.327.056.695.084 1.106.084.43 0 .845-.028 1.246-.084a6.49 6.49 0 0 0 .882-.168v-9.716c.261-.187.574-.327.938-.42.364-.093.733-.14 1.106-.14.56 0 1.003.135 1.33.406.327.27.49.695.49 1.274v6.608c0 .467.06.845.182 1.134.121.29.294.518.518.686.224.168.5.28.826.336.327.056.695.084 1.106.084Zm11.764.196c1.288 0 2.296-.21 3.024-.63.728-.42 1.092-1.013 1.092-1.778 0-.43-.093-.798-.28-1.106-.187-.308-.467-.593-.84-.854-.317.15-.681.29-1.092.42-.41.13-.896.196-1.456.196-.952 0-1.76-.29-2.422-.868-.663-.579-.994-1.447-.994-2.604 0-.579.093-1.083.28-1.512.187-.43.434-.789.742-1.078.308-.29.672-.509 1.092-.658a3.94 3.94 0 0 1 1.33-.224c.523 0 1.008.07 1.456.21.448.14.83.285 1.148.434.224-.224.42-.49.588-.798.168-.308.252-.64.252-.994 0-.765-.364-1.39-1.092-1.876-.728-.485-1.764-.728-3.108-.728-1.008 0-1.965.15-2.87.448a6.942 6.942 0 0 0-2.394 1.344c-.69.597-1.237 1.358-1.638 2.282-.401.924-.602 2.002-.602 3.234 0 1.064.187 2.035.56 2.912.373.877.9 1.629 1.582 2.254.681.625 1.498 1.11 2.45 1.456.952.345 2.016.518 3.192.518Zm17.308-.196c.43 0 .845-.028 1.246-.084a6.49 6.49 0 0 0 .882-.168v-8.484c0-1.83-.518-3.206-1.554-4.13-1.036-.924-2.478-1.386-4.326-1.386-.597 0-1.143.06-1.638.182a9.894 9.894 0 0 0-1.106.322V8.732c0-.467-.06-.845-.182-1.134a1.616 1.616 0 0 0-.518-.686c-.224-.168-.5-.28-.826-.336a7.568 7.568 0 0 0-2.324.014 54.27 54.27 0 0 0-.91.154v16.24c0 .467.06.845.182 1.134.121.29.294.518.518.686.224.168.5.28.826.336.327.056.695.084 1.106.084.43 0 .845-.028 1.246-.084a6.49 6.49 0 0 0 .882-.168v-9.8c.205-.13.476-.243.812-.336.336-.093.69-.14 1.064-.14.56 0 1.031.154 1.414.462.383.308.574.845.574 1.61v6.216c0 .467.06.845.182 1.134.121.29.294.518.518.686.224.168.5.28.826.336.327.056.695.084 1.106.084Zm7.9 4.732c.448 0 .877-.06 1.288-.182.41-.121.821-.345 1.232-.672.41-.327.84-.78 1.288-1.358.448-.579.933-1.325 1.456-2.24a29.05 29.05 0 0 0 .98-1.834c.336-.681.663-1.405.98-2.17.317-.765.62-1.545.91-2.338.29-.793.541-1.563.756-2.31.215-.747.387-1.451.518-2.114.13-.663.196-1.246.196-1.75 0-.69-.215-1.176-.644-1.456-.43-.28-.97-.42-1.624-.42-.803 0-1.54.177-2.212.532-.13.765-.285 1.545-.462 2.338a73.406 73.406 0 0 1-.574 2.38 89.777 89.777 0 0 1-.63 2.31 36.773 36.773 0 0 1-.658 2.072h-.112l-2.212-7.7c-.205-.747-.523-1.255-.952-1.526-.43-.27-.97-.406-1.624-.406-.523 0-1.003.098-1.442.294-.439.196-.789.425-1.05.686a86.61 86.61 0 0 0 .854 3.318c.27.961.532 1.815.784 2.562.252.747.495 1.41.728 1.988.233.579.453 1.101.658 1.568.43.952.826 1.6 1.19 1.946.364.345.705.565 1.022.658a18.798 18.798 0 0 1-1.624 1.75 24.182 24.182 0 0 1-1.792 1.554c.093.747.383 1.353.868 1.82.485.467 1.12.7 1.904.7Z"
            fill="#F47521"
          />
          <path
            d="M144.708 30.068c.99 0 1.918-.112 2.786-.336.868-.224 1.624-.574 2.268-1.05a5.15 5.15 0 0 0 1.526-1.792c.373-.719.56-1.573.56-2.562v-9.8c0-.504-.107-.915-.322-1.232a3.398 3.398 0 0 0-.882-.868c-.597-.43-1.33-.78-2.198-1.05-.868-.27-1.834-.406-2.898-.406-1.045 0-2.011.135-2.898.406-.887.27-1.652.681-2.296 1.232-.644.55-1.148 1.246-1.512 2.086-.364.84-.546 1.83-.546 2.968 0 1.157.173 2.156.518 2.996.345.84.803 1.526 1.372 2.058.57.532 1.232.924 1.988 1.176a7.52 7.52 0 0 0 2.394.378c1.101 0 2.035-.168 2.8-.504v.448c0 .747-.299 1.288-.896 1.624-.597.336-1.4.504-2.408.504a7.286 7.286 0 0 1-2.114-.308 9.408 9.408 0 0 1-1.834-.756c-.224.168-.425.415-.602.742a2.34 2.34 0 0 0-.266 1.134c0 1.027.485 1.769 1.456 2.226.97.457 2.305.686 4.004.686Zm.756-9.352c-.71 0-1.293-.238-1.75-.714-.457-.476-.686-1.255-.686-2.338 0-.952.229-1.685.686-2.198.457-.513 1.143-.77 2.058-.77.373 0 .686.037.938.112.252.075.443.15.574.224v5.152c-.448.355-1.055.532-1.82.532Zm11.456 4.508c.43 0 .845-.028 1.246-.084a6.49 6.49 0 0 0 .882-.168v-9.548c.243-.112.537-.21.882-.294.345-.084.714-.163 1.106-.238a13.299 13.299 0 0 1 2.408-.224c.112-.205.205-.434.28-.686.075-.252.112-.509.112-.77 0-.784-.261-1.349-.784-1.694S161.82 11 160.924 11c-.541 0-1.083.042-1.624.126a11.979 11.979 0 0 0-2.982.868 4.948 4.948 0 0 0-1.106.658 2.598 2.598 0 0 0-.686.826c-.159.308-.238.677-.238 1.106v8.4c0 .467.06.845.182 1.134.121.29.294.518.518.686.224.168.5.28.826.336.327.056.695.084 1.106.084Zm13.78.224c2.203 0 3.91-.364 5.124-1.092.373-.224.695-.49.966-.798.27-.308.406-.705.406-1.19v-6.272c0-.877-.159-1.638-.476-2.282a4.233 4.233 0 0 0-1.358-1.596c-.588-.42-1.297-.733-2.128-.938-.83-.205-1.75-.308-2.758-.308-.653 0-1.349.047-2.086.14-.737.093-1.377.243-1.918.448-.485.205-.845.453-1.078.742-.233.29-.35.677-.35 1.162 0 .373.084.733.252 1.078.168.345.373.602.616.77.541-.224 1.148-.41 1.82-.56a9.523 9.523 0 0 1 2.072-.224c.896 0 1.582.117 2.058.35.476.233.714.62.714 1.162v.196l-3.668.392c-1.605.168-2.79.597-3.556 1.288-.765.69-1.148 1.68-1.148 2.968 0 .765.154 1.437.462 2.016a3.856 3.856 0 0 0 1.316 1.428c.57.373 1.25.653 2.044.84.793.187 1.685.28 2.674.28Zm0-3.472c-.69 0-1.18-.117-1.47-.35a1.114 1.114 0 0 1-.434-.91c0-.373.168-.653.504-.84.336-.187.765-.299 1.288-.336l2.016-.168v2.24c-.187.112-.471.2-.854.266a6.28 6.28 0 0 1-1.05.098Zm27.556 3.248c.43 0 .845-.028 1.246-.084a6.49 6.49 0 0 0 .882-.168v-8.82c0-.952-.159-1.76-.476-2.422-.317-.663-.742-1.195-1.274-1.596a5.326 5.326 0 0 0-1.82-.882 7.86 7.86 0 0 0-2.086-.28c-.99 0-1.834.121-2.534.364-.7.243-1.33.55-1.89.924a5.541 5.541 0 0 0-1.918-.966 8.024 8.024 0 0 0-2.254-.322c-1.027 0-2.011.14-2.954.42-.943.28-1.731.644-2.366 1.092a3.639 3.639 0 0 0-.882.84c-.215.299-.322.7-.322 1.204v8.456c0 .467.06.845.182 1.134.121.29.294.518.518.686.224.168.5.28.826.336.327.056.695.084 1.106.084.43 0 .845-.028 1.246-.084a6.49 6.49 0 0 0 .882-.168v-9.828c.168-.093.373-.191.616-.294a2.22 2.22 0 0 1 .868-.154c.485 0 .9.126 1.246.378.345.252.518.658.518 1.218v6.692c0 .467.06.845.182 1.134.121.29.294.518.518.686.224.168.5.28.826.336.327.056.695.084 1.106.084.41 0 .817-.028 1.218-.084.401-.056.705-.112.91-.168v-9.506a.868.868 0 0 0-.028-.21c.15-.13.373-.257.672-.378a2.24 2.24 0 0 1 .84-.182c.541 0 .97.126 1.288.378.317.252.476.658.476 1.218v6.692c0 .467.06.845.182 1.134.121.29.294.518.518.686.224.168.5.28.826.336.327.056.695.084 1.106.084Z"
            fill="#000"
          />
        </g>
      </g>
    </svg>
  </>
);

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
